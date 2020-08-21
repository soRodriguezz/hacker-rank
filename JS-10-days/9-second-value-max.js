/**
 * * Encontrar el segundo valor mas alto del arreglo
 * * el arreglo trae '2,3,6,6,5'
*/
function getSecondLargest(nums) {
        // Complete the function
        let results = nums.sort((a, b) => a - b)
            .filter((el, index, array) => index === array.indexOf(el));
        return results[results.length - 2];
}