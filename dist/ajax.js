"use strict";
class AjaxTest {
    constructor() {
        // 0: não inicializada
        // 1: conexão configurada
        // 2: requisição enviada
        // 3: recebendo resposta
        // 4: requisição concluída
        this.READY_STATUS_CODE = 4;
    }
    isCompleted(req) {
        return req.readyState === this.READY_STATUS_CODE;
    }
    httpGet(url, callback) {
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        };
        req.open("GET", url, true);
        req.send();
    }
    httpPost(url, data, callback) {
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        };
        req.open("POST", url, true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(data);
    }
}
let ajax = new AjaxTest();
ajax.httpGet("https://httpbin.org/ip", (status, response) => {
    let divMain = document.getElementById("main");
    divMain.innerHTML = response;
});
const dados = JSON.stringify({
    name: "Maiara",
    company: "DevDojo"
});
ajax.httpPost("https://httpbin.org/post", dados, (status, response) => {
    const divMain = document.getElementById("main");
    divMain.textContent = `Status: ${status}\nResposta: ${response}`;
});
//# sourceMappingURL=ajax.js.map