function pairwise(inputArray, sum) {

    // create an array of value-index pairs, like [[value, index], [value, index], [value, index], ...]
    let masterArray = [];
    for (let idx = 0; idx < inputArray.length; idx++) {
        masterArray.push([inputArray[idx],idx]);
    }

    masterArray.sort(); // this sorts the array of value-index pairs by value

    let sumOfIndices = 0;
    let num1_idx = 0; // start with first element
    let num2_idx = masterArray.length-1; // and last element
    for (let idx = 0; idx <  + masterArray.length; idx++) {
        let num1 = masterArray[num1_idx][0];
        let num2 = masterArray[num2_idx][0]; 

        let valuesArray = [];
        for (let idx = 0; idx < masterArray.length; idx++) {
            valuesArray[idx] = masterArray[idx][0];
        }
        let lookbackArray = valuesArray.slice(num1_idx+1,num2_idx);

        if (num1 + num2 < sum) {
            num1_idx++;
        }
        else if (num1 + num2 > sum) {
            num2_idx--;
        }
        
        // if the 2 numbers add up, but an element with same value as num2 exists at a lower index, skip this num2
        // because we are interested in the lowest possible indexes where the condition is met
        else if ((num1 + num2 == sum) && (lookbackArray.includes(num2))) { 
            num2_idx--;
        }

        else if (num1 + num2 == sum) {
            sumOfIndices = sumOfIndices + masterArray[num1_idx][1] + masterArray[num2_idx][1];
            delete masterArray[num1_idx];
            delete masterArray[num2_idx];
            masterArray = masterArray.filter(element => (element != null && element !== false && element !== ""));
            idx = 0;
            num1_idx = 0;
            num2_idx = masterArray.length-1;
        }
    }

    return sumOfIndices;
}

let x = pairwise([1,1,1], 2);

console.log(x);