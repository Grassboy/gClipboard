var getClipboard = function() {
    if(
        confirm([
            "[gClipboard] 您確定要透過程式讀取您的系統剪貼簿內容?\r\n"
        ].join(''))
    ) {
        var pasteTarget = document.getElementById('grassboy-paste-area');
        if(!pasteTarget) {
            pasteTarget = document.createElement("div");
            pasteTarget.id = 'grassboy-paste-area';
            pasteTarget.style = 'width:0;height:0;overflow:hidden;opacity:0;';
            pasteTarget.contentEditable = true;
            document.body.appendChild(pasteTarget);
        }
        pasteTarget.innerText = '';
        pasteTarget.focus();
        document.execCommand("Paste", null, null);
        var paste = pasteTarget.innerText;
        if(!paste && pasteTarget.childNodes.length == 1 && pasteTarget.getElementsByTagName('img').length == 1) {
            var img = pasteTarget.getElementsByTagName('img')[0];
            paste = img.src;
        }
        //TODO: 下面這行疑似會有 Bug，之前要 comment 起來才能正常運作, Why!!!
        pasteTarget.parentNode.removeChild(pasteTarget);
        return paste;
    } else {
        throw 'gClipboard: 存取遭拒';
    }
}
var setClipboard = function(text) {
    if(
        confirm([
            "[gClipboard] 您確定要透過程式更改您的系統剪貼簿內容?\r\n",
            "即將更改的內容結尾為: ", text.substr(-50)
        ].join(''))
    ) {
        var copyTarget = document.getElementById('grassboy-copy-area');
        if(!copyTarget) {
            copyTarget = document.createElement('textarea');
            copyTarget.id = 'grassboy-copy-area';
            copyTarget.style = 'width:0;height:0;overflow:hidden;opacity:0;';
            document.body.appendChild(copyTarget);
        }
        copyTarget.value = text;
        copyTarget.select();
        document.execCommand('copy');
        //TODO: 下面這行疑似會有 Bug，之前要 comment 起來才能正常運作, Why!!!
        copyTarget.parentNode.removeChild(copyTarget);
        console.info('gClipboard: 已複製到剪貼簿');
    } else {
        throw 'gClipboard: 存取遭拒';
    }
}
var gClipboard = function(arg){
    if(arg === null || arg === undefined) {
        throw "gClipboard: 參數不得為 null 或 undefined";
    }
    if(typeof arg == 'function') {
        arg(getClipboard());
    } else if(typeof arg == 'object') {
        var json;
        try {
            json = JSON.stringify(arg);
        } catch(e) {
            alert(e);
            json = arg.toString();
        }
        setClipboard(json);
    } else {
        setClipboard(arg);
    }
};
exportFunction(gClipboard, window, {
	defineAs: "gClipboard"
});
//console.log('gClipboard loaded'); //check if addon is loaded
