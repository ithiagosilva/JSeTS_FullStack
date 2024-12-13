let campoDataHora = document.getElementById("dia-hora");
let listaMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let listaDiaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

function updateState() {
    const date = new Date();
    const mes = date.getMonth(); // mês em numeros começando por 0
    let diaSemana = date.getDay(); // dia da semana em numeros weekday começando por 0
    const diaSemanaNumeros = date.getDate(); 
    const ano = date.getFullYear();
    let hora = date.getHours();
    let min = date.getMinutes();
    let seg = date.getSeconds();

    function adiciona0(num) {
        return num < 10 ? num = "0" + num : num = num;
    }
    
    hora = adiciona0(hora)
    min = adiciona0(min)
    seg = adiciona0(seg)


    // Transforma o mes ou dia em uma string da lista correspondente ao index
    function transform(array, obj) {
        for (let i = 0; i < array.length; i++) {
            if (i === obj) {
                obj = array[i]
            } 
        }
        return obj;
    }

    diaSemana = transform(listaDiaSemana, diaSemana)


    function adicionaFeira() {
        return (diaSemana !== "Domingo" && diaSemana !== "Sábado") ? diaSemana = diaSemana+"-feira" : diaSemana = diaSemana; 
    }

    diaSemana = adicionaFeira()

    campoDataHora.innerText = `${diaSemana}, ${diaSemanaNumeros} de ${transform(listaMeses, mes)} de ${ano}, ${hora}:${min}:${seg}`
}
setInterval(updateState, 1000);