const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};const n=new class{start(){s(),t.stopBtn.disabled=!1,t.startBtn.disabled=!0,this.intervalID=setInterval((()=>{s()}),1e3)}stop(){clearInterval(this.intervalID),t.stopBtn.disabled=!0,t.startBtn.disabled=!1}constructor(){this.intervalID=null}};function s(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startBtn.addEventListener("click",(()=>{n.start()})),t.stopBtn.addEventListener("click",(()=>{n.stop()}));
//# sourceMappingURL=01-color-switcher.3c106e22.js.map
