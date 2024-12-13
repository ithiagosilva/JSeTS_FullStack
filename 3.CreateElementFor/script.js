const box = [
    {
        tag: "h1", 
        texto: "Titulo 1"
    },
    {
        tag: "p", 
        texto: "Conteudo do post."
    },
    {
        tag: "p", 
        texto: `${new Date().toLocaleTimeString()}`
    },
    {
        tag: "p", 
        texto: "Autor"
    },  
];

const boxTags = document.querySelector('.box-tags');
const div = document.createElement('div');
boxTags.appendChild(div);

for (let i = 0; i < box.length; i++ ) {
    let {tag, texto} = box[i];
    
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}
