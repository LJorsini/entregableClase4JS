/*Funcion que calcula el precio a pagar en funcion de la cantidad de saltos que se compraron*/
function precioTotal (totalSaltos) {
    let precioSalto = 3000;
    let total = totalSaltos*precioSalto;
    alert("Usted compro " + totalSaltos + " saltos " + " Por un total de " + total + " pesos ");
}
/*Funcion que calcula el precio de la financiacion dependiendo de las cuotas que se eligieron. Por ahora se supone que las cuotas son sin interes*/
function cuotas (saltos, financiado) {
    let precioSalto = 3000;
    let total = saltos*precioSalto;
    let totalCuotas = total/financiado;
    alert(" Forma de pago " + financiado + " Cuotas de $ " + totalCuotas);
    
}

let saltos = parseInt(prompt("Cantidad de saltos que va a comprar"));
let financiado = parseInt(prompt("¿En cuantas cuotas desea pagar?"));

precioTotal(saltos);
cuotas(saltos, financiado);





