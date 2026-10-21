let divMain = <HTMLDivElement> document.getElementById("main");
//divMain.innerHTML = "<span> DevDojo </span>";
//divMain.textContent = "<span> DevDojo </span>";
//divMain.textContent = "DevDojo";

let newDiv = document.createElement("div");
newDiv.textContent = "DevDojo";

divMain.appendChild(newDiv);
divMain.insertBefore(newDiv,divMain.firstChild);