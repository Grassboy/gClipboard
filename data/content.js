var prefix = "gClipboard-";
var localPref = null;
var postfix = "";
var checkHost = function(){
	var whiteLists = localPref.whiteList.split(",");
	var toRegExp = function(str){
		str = str.split("*");
		for(var i = 0, n = str.length; i < n; ++i){
			str[i] = str[i].replace(/([\/\.\?\*\+\^\$\[\]\\\(\)\{\}\-])/g, "\\$1");
		}
		str = str.join(".*");
		return new RegExp("^"+str+"$");
	};
	for(var i = 0, n = whiteLists.length; i < n; ++i){
		var hostRegExp = toRegExp(String.trim(whiteLists[i]));
		if(hostRegExp.test(location.host)){
			return true;
		}
	}
	return false;
};
self.port.on(prefix+"init", function(pref){
	localPref = pref;
	var eventQueue= {};
	var gClipboard = function(){
		if(unsafeWindow["gClipboard"+postfix] !== gClipboard){
			return;
		}
		var str;
		event_id = "t"+(new Date()).getTime()+Math.random();
		if(arguments.length !== 1 && arguments.length !== 2) {
			throw "gClipboard 使用方式： gClipboard([function]): 取得系統剪貼簿的內容，並傳回至 callback function; \r\n gClipboard([string/number/object], [authToken]): 將 [string/number/object] 複製至系統剪貼簿 \n\tauthToken 可不指定，但若 authToken 與系統設定的相同，則無條件略過確認訊息";
		}
		switch(typeof arguments[0]){
		case "function": //get clipboard
			if(
				localPref.showConfirm &&
				!checkHost() && 
				!(localPref.authToken !== "" && arguments[1] === localPref.authToken) &&
				!confirm("[gClipboard] 您確定要透過程式讀取您的系統剪貼簿內容?\r\n")
			) throw "gClipboard 存取遭拒";
			eventQueue[event_id] = arguments[0];
			self.port.emit(prefix+"request", event_id);
			return;
		//set clipboard
		case "object":
			try {
				str = JSON.stringify(arguments[0]);
			} catch(e) {
				alert(e.toString());
				return;
			}
			break;
		case "number": case "string": case "float": case "boolean":
			str = arguments[0].toString();
			break;
		}
		if(
			localPref.showConfirm &&
			!checkHost() && 
			!(localPref.authToken !== "" && arguments[1] === localPref.authToken) &&
			!confirm([
				"[gClipboard] 您確定要透過程式更改您的系統剪貼簿內容?\r\n",
				"即將更改的內容結尾為: ", str.substr(-50)
			].join(''))
		) throw "gClipboard 存取遭拒";
		eventQueue[event_id] = function(result){
			return;
		};
		self.port.emit(prefix+"set", event_id, str);
	};
	while(typeof unsafeWindow["gClipboard"+postfix] !== "undefined"){
		postfix = Math.random().toString().substr(-3);
	}
	unsafeWindow["gClipboard"+postfix] = gClipboard;
	if(postfix !== ""){
		alert( ["[gClipboard] gClipboard() 函數在這頁已經被定義了…\r\n",
			"請改用 'gClipboard", postfix, "()' 來存取剪貼簿資訊..."].join(''));
	}
	self.port.on(prefix+"response", function(event_id, result){
		eventQueue[event_id].call(this, result);
		delete eventQueue[event_id];
	});
});
self.port.on(prefix+"update", function(pref){
	localPref = pref;
});
