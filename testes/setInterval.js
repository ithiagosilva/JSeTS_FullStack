function retornaHoraBR() {
  const date = new Date();
  const horaBR = date.toLocaleTimeString("pt-br");
  return horaBR;
}

const timer = setInterval(() => {
  console.log(retornaHoraBR());
}, 1000);

setTimeout(() => {
    clearInterval(timer)
    console.log('Stop')
}, 3000);