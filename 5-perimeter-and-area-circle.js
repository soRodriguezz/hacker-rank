
/**
 * * Se lee '2.6' en r con readLine()
 * * Se imprime resultado del area y perimetro
 */

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    var r = readLine();
    // Print the area of the circle:
    var area = Math.PI * (r**2);
    console.log(area);

    // Print the perimeter of the circle:
    var perimeter = 2 * Math.PI * r;
    console.log(perimeter);

// ----------------------------------------------------------------------
    try {
        // Attempt to redefine the value of constant variable PI
        let PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}