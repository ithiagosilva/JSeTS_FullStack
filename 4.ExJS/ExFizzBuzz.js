function fizzBuzz(num) {
    if (num !== Number(num)) {
        return num === undefined ? "Você não digitou nada." : "Isso não é um número."
    }
    if (num % 3 === 0) {
        if (num % 5 === 0) {
            return "FizzBuzz";
        } else {
            return "Fizz";
        }

    } else if (num % 5 === 0) {
        return "Buzz";

    } else {
        return num;
    }
}
console.log(fizzBuzz())

for (let i = 0; i <= 100; i++){
    const resp = fizzBuzz(i);
    console.log(i, resp)
}
