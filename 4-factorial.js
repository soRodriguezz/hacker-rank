/**
 * * El ejercicio manda un 4 en 'n'
 * * Calcular el factorial con n
 */

function factorial(n) {
    let total = 1;
    for(let i=1; i <= n; i++){
        total = total * i;
    }
    return total;
}