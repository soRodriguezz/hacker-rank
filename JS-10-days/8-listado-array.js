
/*
    * El ejercicio trae la palabra 'javascriptloops' en una variable 's'.
    * El ejercicio consta de imprimir primero las vocales y luego las consonantes en orden vertical
*/

function vowelsAndConsonants(s) {
    var arrayVowels = s.match(/[aeiou]/gi);
    var arrayConsonants = s.match(/[bcdfghjklmnpqrstvwxyz]/gi)

    for(let i = 0; i < arrayVowels.length; i++){
        console.log(arrayVowels[i]);
    }

    for(let i = 0; i < arrayConsonants.length; i++){
        console.log(arrayConsonants[i]);
    }

}