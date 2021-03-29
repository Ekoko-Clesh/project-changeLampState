let buttons = document.getElementById("buttons").addEventListener("click", function(Event) {
  changeState[Event.target.id]();

});

//OBJECTO CHANGESTATE
let changeState = {
    "ligar": () => imagem.src = "./ligada.jpg",
  
    "desligar" : () => imagem.src =  "desligada.jpg",
  
    "quebrar" : () => imagem.src = "quebrada.jpg",
}

function overMouse() {
  imagem.src = changeState["ligar"]();
}
function outMouse() {
  imagem.src = changeState["desligar"]();
}
let imagem = document.getElementById("img-content");
let mousOver =  document.getElementById("img-content").addEventListener("mouseover", overMouse);
let mouseOut = document.getElementById("img-content").addEventListener("mouseout", outMouse);
