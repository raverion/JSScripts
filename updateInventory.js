function updateInventory(arr1, arr2) {
    let myInv = {};

    // create myInv object from arr1 array
    for (let idx = 0; idx < arr1.length; idx++) {
        myInv[arr1[idx][1]] = arr1[idx][0];
    }

    // update myInv object with arr2
    for (let idx = 0; idx < arr2.length; idx++) {
        if (myInv[arr2[idx][1]] == undefined) {
            myInv[arr2[idx][1]] = arr2[idx][0];
        }
        else {
            myInv[arr2[idx][1]] = myInv[arr2[idx][1]] + arr2[idx][0];
        }
    }

    arr1 = Object.entries(myInv); // convert the myInv object to array and assign to arr1
    arr1.sort(); // sort the arr1 array alphabetically

    // invert each item in arr1 array, from [name, qty] to [qty, name] format
    for (let idx = 0; idx < arr1.length; idx++) {
        arr1[idx] = [arr1[idx][1], arr1[idx][0]];
    }

    return arr1;
}

// Example inventory lists
var curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];
var newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];

array = updateInventory(curInv,newInv);
console.log(array);
console.log(Array.isArray(array));