/**
 * * Encontrar el segundo valor mas alto del arreglo
 * * el arreglo trae '2,3,6,6,5'
 */

function getSecondLargest(nums) {
    // eliminar los valores repetidor del arreglo
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    // Pasar los valores unicos y ordenarlos de menor a mayor
    let numberMax = nums.filter(onlyUnique).sort();
    // mostrar el penultimo resultado
    return numberMax[numberMax.length - 2]
}

