let nome: string = 'Diego';
console.log(nome);

let animais: string[] = ['Elefante', 'Cachorro', 'Panda', 'Girafa'];
console.log(animais);

let carro: {
  nome: string,
  ano: number,
  preco: number,
};

carro = {nome: 'Fusca', ano: 1990, preco: 10.000};
console.log(carro);

function multiplicarNumero(num1: number, num2: number) {
  return num1 * num2;
}

console.log(multiplicarNumero(1, 2));