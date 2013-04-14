gClipboard
==========

## Firefox Addon: Grassboy Clipboard

A firefox add-on that can read/write your system clipboard

### Installation:   
  * Download the grassboy-clipboard.xpi
  * Drag the .xpi file into your local firefox window
  * Click "install" button and complete the installation
  * There is no need to restart your firefox, just reload your page, the add-on will be available

### Usage:
  * After installation, window.gClipboard would be a function that can access your system clipboard
  * get clipboard: gClipboard([callback function])
    * get the contents of clipboard, then pass the result into callback function
  * set clipboard: gClipboard([string/number/boolean/object])
    * set the contents of clipboard
    * if the type of argument is object, it will convert to string format by JSON.stringify()

### Configuration:
  * You can configure this add-on in the add-on setting page, the following is the options of this add-on
  * confirm message: (on/off)
    * when set on, it will display confirm message when invoke gClipboard()
  * white list hosts: (string)
    * you can set some host that ignore the confirm message when invoke gClipboard()
    * you can use "," charactor to separate several hosts
    * you can use "*" charactor to identify the host fuzzily
  * authorized token: (string)
    * you can pass the authorized token into gClipboard() as 2nd argument to skip the confirm message even if the host is not in the white list
    * authorized token should not be blank. if it leave blank, then it means that the confirm message won't be skipped by authorized keys scheme



----
防止英文沒人看懂的中文版XD

gClipboard
==========

## Firefox Addon: Grassboy Clipboard

一個可以存取系統剪貼簿的 Firefox add-on

### 安裝方式:   
  * 下載 grassboy-clipboard.xpi 檔案
  * 把 .xpi 檔拖到您的 Firefox 視窗
  * 當 Firefox 提示您安裝 add-on 時，按下「安裝」鈕完成安裝
  * Firefox 不用重新啟動，只要頁面重新整理後就完成安裝了

### 使用方式:
  * 安裝完畢後，window.gClipboard 函數便可以存取您的系統剪貼簿
  * 讀取剪貼簿: gClipboard([callback function])
    * 取得剪貼簿的內容，並將結果丟到 callback function 去
  * 設定剪貼簿: gClipboard([string/number/boolean/object])
    * 將您要複製的內容丟到 gClipboard 即可
    * 如果傳入的參數是 javascript 物件，它會透過 JSON.stringify() 轉成字串後才進行複製

### Configuration:
  * 您可以在附加元件設定頁中，對此 add-on 進行設定，以下是您可以設定的項目
  * 確認訊息: (on/off)
    * 當您打開了確認訊息，程式試圖透過 gClipboard() 存取您的剪貼簿時，會先跳出提示訊息請您確認是否繼續
  * 白名單網域: (字串)
    * 您可以將某些網域(local.host)加入白名單，在這些網域下的 gClipboard 在呼叫時，可以略過提示訊息
    * 您可以透過 "," 字元分隔多個網域
    * 您可以透過 "*" 字元去對網域進行模糊比對
  * 自動允許授權碼 (字串)
    * 在一些不在您白名單設定的網域，您可透過將授權碼傳入 gClipboard 的第二個參數，以略過提示訊息
    * 授權碼不得為空白，當授權碼為空白，則表示您不希望透過授權碼的機制去略過提示訊息



