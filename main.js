function precioTotal (totalSaltos) {
    let precioSalto = 3000;
    let total = totalSaltos*precioSalto;
    alert("Usted compro " + totalSaltos + " Por untotal de " + total);
}

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





