function getFinalOpenedDoors(numDoors) {

    let doors = [];
    let openDoors = [];
    
    for (let idx = 0; idx < numDoors; idx++) {
        doors[idx] = false;
    }

    for (let inc = 1; inc <= numDoors; inc++){
        for (let idx = inc - 1; idx < numDoors; idx = idx + inc) {
            doors[idx] = !doors[idx];
        }
    }

    let openDoorsIdx = 0;
    for (let idx = 0; idx < numDoors; idx++) {
        if (doors[idx]) {
            openDoors[openDoorsIdx++] = idx + 1;
        }
    }
    return openDoors;
}

var arr = getFinalOpenedDoors(10);

console.log(arr);