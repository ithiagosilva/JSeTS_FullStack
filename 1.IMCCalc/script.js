let forms = document.getElementById('forms');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let calcularBtn = document.getElementById('calc');
let textoResultado = document.getElementById('text-result');
let resultado = document.getElementById('resultado');

let imc;

calcularBtn.addEventListener('click', calcularMostrar)

function calcularMostrar() {
    let valorPeso;
    let valorAltura;
    let calculo;
    let valor;

    if (peso.value === "" && altura.value === "") {
        calculo = 'Você não digitou nada.';
        textoResultado.style.color="red";
        valor = '<img src="./emoji.gif" width="100"/>';
    
    } else if (!Number(peso.value) || (peso.value.length < 2 || peso.value.length > 3 )) {
        if (!Number(altura.value) || (altura.value.length < 2 || altura.value.length > 3 )) {
            textoResultado.style.color="red";
            valor = '<img src="./emoji.gif" width="100"/>';
            calculo = 'Ambos os valores são ínvalidos.';
        } else {
            calculo = 'Peso ínvalido.';
            textoResultado.style.color="red";
            valor = '<img src="./emoji.gif" width="100"/>';
        }

    } else if (!Number(altura.value) || (altura.value.length < 2 || altura.value.length > 3 )) {
        textoResultado.style.color="red";
        valor = '<img src="./emoji.gif" width="100"/>';
        calculo = 'Aultura ínvalida.';

    } else {
        valorPeso = peso.value;
        valorAltura = altura.value;
        imc = valorPeso / ((valorAltura / 100) ** 2);
        
        let status;
        
        if (imc < 18.5) {
            status = "Abaixo do peso";
        } else if (imc < 24.9) {
            status = "Peso normal";
        } else if (imc < 29.9) {
            status = "Sobrepeso";
        } else if (imc < 34.9) {
            status = "Obesidade grau 1";
        } else if (imc < 39.9) {
            status = "Obesidade grau 2";
        } else {
            status = "Obesidade grau 3";
        }
        
        textoResultado.style.color="black";
        calculo = `<strong>${status}</strong>. <br><br> Seu IMC é: `;
        valor = imc.toFixed(2);
    }
    //Mostra na tela
    textoResultado.innerHTML=calculo;
    resultado.innerHTML=valor;

    window.scrollBy(0,100);
}


//Para o evento do submit
forms.addEventListener("submit", stopDefAction);

function stopDefAction(e) {
    e.preventDefault();
}





