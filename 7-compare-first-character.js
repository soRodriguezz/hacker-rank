/**
 * * Compara la primera letra de la cadena y lo ordena segun la letra que corresponda
 */

function getLetter(s) {
    let letter;
    const compare = s.charAt(0);

    // Write your code here
    if (compare=='a' || compare=='e' || compare=='i' || compare=='o' || compare=='u') {
        letter = 'A';
    } else if(compare=='b' || compare=='c' || compare=='d' || compare=='f' || compare=='g') {
        letter = 'B';
    } else if(compare=='h' || compare=='j' || compare=='k' || compare=='l' || compare=='m') {
        letter = 'C';
    } else if(compare=='n' || compare=='p' || compare=='q' || compare=='r' || compare=='s' || compare=='t' || compare=='v' || compare=='w' || compare=='x' || compare=='y' || compare=='z') {
        letter = 'D';
    }

    return letter;
}