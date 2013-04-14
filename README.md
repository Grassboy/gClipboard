gClipboard
==========

## Firefox Addon: Grassboy Clipboard

A firefox add-on that can read/write your system clipboard

### Installation: 	
	* Download the grassboy-clipboard.xpi
	* Drag the .xpi file into your local firefox window
	* Click "install" button and complete the installation

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



	
