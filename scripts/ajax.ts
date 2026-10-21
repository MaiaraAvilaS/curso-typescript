class AjaxTest {
    // 0: não inicializada
    // 1: conexão configurada
    // 2: requisição enviada
    // 3: recebendo resposta
    // 4: requisição concluída
    private READY_STATUS_CODE = 4;

    private isCompleted(req: XMLHttpRequest) {
        return req.readyState === this.READY_STATUS_CODE;
    }

    public httpGet(url: string,callback: (status: number, response: string) => any): void { //callback: função recebida como argumento
        let req = new XMLHttpRequest(); //informa ao TypeScript que req deve ser um objeto compatível com a API XMLHttpRequest do navegador

        req.onreadystatechange = () => { //manipulador de evento
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        }

        req.open("GET", url, true);
        req.send();
    }

    public httpPost(url: string,data: string,callback: (status: number, response: string) => any): void { //status: number: o código de status HTTP //response: string: o corpo da resposta como texto
    //url: endereço de destino. data: conteúdo que será enviado. callback: função que processará a resposta.    
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            let finished = this.isCompleted(req);
            if (finished) {
                callback(req.status, req.responseText); //A resposta não chega necessariamente no mesmo instante em que a requisição é enviada. O callback permite executar uma ação quando os dados estiverem disponíveis.
            }
        };

        req.open("POST", url, true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(data);
    }
}

let ajax = new AjaxTest();

ajax.httpGet("https://httpbin.org/ip", (status: number, response: string) => {
    let divMain = <HTMLDivElement> document.getElementById("main");
    divMain.innerHTML = response;
});

const dados = JSON.stringify({
    name: "Maiara",
    company: "DevDojo"
});

ajax.httpPost("https://httpbin.org/post", dados, (status: number, response: string) => {
    const divMain = document.getElementById("main") as HTMLDivElement;

    divMain.textContent = `Status: ${status}\nResposta: ${response}`;
});






