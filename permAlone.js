function appendPerm(masterArray, inputArray) {
    masterArray.push(inputArray.join(""));
}

// Generating permutation using Heap Algorithm
function buildPerm(masterArray, inputArray, size) {

        // if size becomes 1 then prints the obtained permutation
        if (size == 1) {
            appendPerm(masterArray, inputArray);
            return;
        }
  
        for (let i = 0; i < size; i++) {
            buildPerm(masterArray, inputArray, size - 1);
  
            // if size is odd, swap 0th i.e first and (size-1)th i.e last element
            if (size % 2 == 1) {
                let temp = inputArray[0];
                inputArray[0] = inputArray[size - 1];
                inputArray[size - 1] = temp;
            }
  
            // If size is even, swap ith and (size-1)th i.e last element
            else {
                let temp = inputArray[i];
                inputArray[i] = inputArray[size - 1];
                inputArray[size - 1] = temp;
            }
        }
}

function getPerm(masterArray, inputString) {
    let inputArray = inputString.split("");
    buildPerm(masterArray, inputArray, inputArray.length);
}

function filterArray(inputArray) {
    let outputArray = [];

    let regex_criteria = /(.)\1+/;

    outputArray = inputArray.filter(function(string) { return !string.match(regex_criteria)});

    return outputArray.length;
}

function permAlone(string) {
    var masterArray = [];
    getPerm(masterArray, string);
    return filterArray(masterArray);
}


console.log("abcdefa"+" - "+permAlone("abcdefa"));
console.log("abfdefa"+" - "+permAlone("abfdefa"));
console.log("adddcff"+" - "+permAlone("adddcff"));