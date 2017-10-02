gClipboard
==========

## Firefox Addon: Grassboy Clipboard

A firefox add-on that can read/write your system clipboard

### Installation:   
  * Go to https://addons.mozilla.org/zh-TW/firefox/addon/grassboy-clipboard/
  * Click "Add to Firefox" button, done!!

### Usage:
  * After installation, window.gClipboard would be a function that can access your system clipboard
  * get clipboard: gClipboard([callback function])
    * get the contents of clipboard, then pass the result into callback function
  * set clipboard: gClipboard([string/number/boolean/object])
    * set the contents of clipboard
    * if the type of argument is object, it will convert to string format by JSON.stringify()

### Configuration:
  * Because I'm not familiar with firefox 57+ WebExtension Spec. and I will not skip the confirm message in myself use case.    
    I remove the supporting to skip the confirm message (Pull requests are welcome!!)


----
防止英文沒人看懂的中文版XD

gClipboard
==========

## Firefox Addon: Grassboy Clipboard

一個可以存取系統剪貼簿的 Firefox add-on

### 安裝方式:   
  * 到官方附加元件安裝頁 https://addons.mozilla.org/zh-TW/firefox/addon/grassboy-clipboard/
  * 點選「新增至 Firefox 」即可安裝

### 使用方式:
  * 安裝完畢後，window.gClipboard 函數便可以存取您的系統剪貼簿
  * 讀取剪貼簿: gClipboard([callback function])
    * 取得剪貼簿的內容，並將結果丟到 callback function 去
  * 設定剪貼簿: gClipboard([string/number/boolean/object])
    * 將您要複製的內容丟到 gClipboard 即可
    * 如果傳入的參數是 javascript 物件，它會透過 JSON.stringify() 轉成字串後才進行複製

### Configuration:
  * 因為我不熟 Firefox 57+ 的 WebExtension 規格，加上我自己不會想略過確認訊息   
    所以這一版的 Extension 不支援任何白名單 or 授權機制來略過確認訊息
