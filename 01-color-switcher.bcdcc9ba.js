!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var n={};function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,e,n){e&&a(t.prototype,e);n&&a(t,n);return t};var r={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},o=new(function(){"use strict";function a(){t(e)(this,a),this.intervalID=null}return t(n)(a,[{key:"start",value:function(){u(),r.stopBtn.disabled=!1,r.startBtn.disabled=!0,this.intervalID=setInterval((function(){u()}),1e3)}},{key:"stop",value:function(){clearInterval(this.intervalID),r.stopBtn.disabled=!0,r.startBtn.disabled=!1}}]),a}());function u(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}r.startBtn.addEventListener("click",(function(){o.start()})),r.stopBtn.addEventListener("click",(function(){o.stop()}))}();
//# sourceMappingURL=01-color-switcher.bcdcc9ba.js.map