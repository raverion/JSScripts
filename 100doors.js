function getFinalOpenedDoors(numDoors) {

    let doors = [];
    let openDoors = [];
    
    // build 100 doors all closed (false)
    for (let idx = 0; idx < numDoors; idx++) {
        doors[idx] = false;
    }

    // toggle (true->false / false->true) every inc-th door
    for (let inc = 1; inc <= numDoors; inc++){
        for (let idx = inc - 1; idx < numDoors; idx = idx + inc) {
            doors[idx] = !doors[idx];
        }
    }

    // return an array of all open (true) doors
    let openDoorsIdx = 0;
    for (let idx = 0; idx < numDoors; idx++) {
        if (doors[idx]) {
            openDoors[openDoorsIdx++] = idx + 1;
        }
    }
    return openDoors;
}

function getFinalOpenedDoorsFaster(numDoors) {
    
    
    // iterate thru the door numbers 1 to numDoors. Add door number to openDoors array if door number is a square
    let openDoors = [];
    let openDoorsIdx = 0;
    for (let idx = 1; idx <= numDoors; idx++) {
        if ((idx % Math.sqrt(idx)) == 0) {
            openDoors[openDoorsIdx++] = idx;
        }
    }

    return openDoors;

}

var arr1 = getFinalOpenedDoors(100);
var arr2 = getFinalOpenedDoorsFaster(100);

console.log(arr1);
console.log(arr2);