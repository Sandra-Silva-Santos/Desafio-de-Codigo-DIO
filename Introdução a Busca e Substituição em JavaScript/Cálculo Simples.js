let valores1 = gets().split(" ");
let valores2 = gets().split(" ");

let codigo1 = parseInt(valores1[0]);
let numero1 = parseInt(valores1[1]);
let valorUnitario1 = parseFloat(valores1[2]);

let codigo2 = parseInt(valores2[0]);
let numero2 = parseInt(valores2[1]);
let valorUnitario2 = parseFloat(valores2[2]);

let total = numero1 * valorUnitario1 + numero2 * valorUnitario2;

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));