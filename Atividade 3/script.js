console.log("Olá, mundo!");

const img1 = document.querySelector("#primeira");
const img2 = document.querySelector("#segunda");
const img3 = document.querySelector("#terceira");
const esquerda = document.querySelector("#esquerda");
const direita = document.querySelector("#direita");
posicao = 2;

img2.classList.add("ativo");

esquerda.addEventListener("click", () => {
    if(posicao==2) {
        posicao--;
        img1.classList.toggle("ativo");
        img2.classList.toggle("ativo");
    }
    else if (posicao ==3) {
        posicao--;
        img2.classList.toggle("ativo");
        img3.classList.toggle("ativo");
    }
})

direita.addEventListener("click", () => {
    if(posicao==2) {
        posicao++;
        img2.classList.toggle("ativo");
        img3.classList.toggle("ativo");
    }
    else if (posicao ==1) {
        posicao++;
        img1.classList.toggle("ativo");
        img2.classList.toggle("ativo");
    }
})