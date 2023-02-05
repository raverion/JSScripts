function getSymDiff(...args) {
    let i = 0;
    let array1 = [];
    let array2 = [];
    let union = [];
    let unique_union = [];
    let intersection = [];
    let difference = [];
    while (args[i] != undefined && args[i+1] != undefined) { // let's do a while loop, taking 2 arguments at a time, getting the difference, using the difference as the new 1st argument, and so on, until the next argument is undefined, i.e. non-existent
        if (i == 0) {
            array1 = args[i];
        }
        else{
            array1 = difference;
        }
        array2 = args[i+1];
        union = [...array1, ...array2]; // spread array1 and array2 elements, and combine all into array union
        unique_union = [...new Set(union)]; // remove duplicates from array union
        intersection = array1.filter(val => array2.includes(val)); // get the overlap between array1 and array2
        difference = unique_union.filter(val => !intersection.includes(val)); // we are interested in the elements that are in the union but not in the intersection
        if (args[i+2] == undefined) {
            return difference;
        }
        i++;
    }
}

myOutput = getSymDiff([1, 2, 5], [2, 3, 5], [3, 4, 5]);
console.log(myOutput);