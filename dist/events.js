"use strict";
class ClickHandler {
    constructor() {
        let main = document.getElementById("main"); //representa o documento HTML carregado no navegador
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        if (main !== null && btn1 !== null && btn2 !== null) {
            main.addEventListener("click", ClickHandler.alertEventMain, true); //registra uma função que será executada quando determinado evento acontecer
            btn1.addEventListener("click", ClickHandler.alertEventBtn1, true);
            btn2.addEventListener("click", ClickHandler.alertEventBtn2, true);
        }
    }
    static alertEventMain(event) {
        alert("clicked over main");
        event.stopPropagation();
    }
    static alertEventBtn1() {
        alert("clicked btn1");
    }
    static alertEventBtn2() {
        alert("clicked btn2");
    }
}
const clickHandler = new ClickHandler();
//# sourceMappingURL=events.js.map