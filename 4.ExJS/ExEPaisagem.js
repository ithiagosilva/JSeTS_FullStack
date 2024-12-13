function ePaisagem(largura, altura) {
    return largura > altura ?  true : false
}

const n1 = 1920;
const n2 = 1080;

const resolução = ePaisagem(n1, n2);

console.log(resolução);