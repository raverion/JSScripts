function bubbleSort(array) {
    // Only change code below this line
    let isSorted;
    while (!isSorted) {
        isSorted = true;
        for (let idx = 0; idx<(array.length-1); idx++) {
            if (array[idx] > array[idx+1]) {
                let bubble = array[idx];
                array[idx] = array[idx+1]; 
                array[idx+1] = bubble;
                isSorted = false;
            }
        }
    }
    return array;
    // Only change code above this line
  }

  function selectionSort(array) {

    let startIdx = 0;
    let min;
    let minIdx;
    let newArray = [];
    while (startIdx<array.length) {

        // find the smallest element
        for (let idx=0; idx<array.length; idx++) {
            if (array[idx] != undefined) {
                min = array[idx];
                minIdx = idx;
                break;
            }
        }
        for (let idx=0; idx<array.length; idx++) {
            if (array[idx] == undefined) {
                continue;
            }
            if (array[idx]<min){
                min = array[idx];
                minIdx = idx;
            }
        }
        array[minIdx] = undefined;
    
        // append to newArray
        newArray[startIdx] = min;
        startIdx++;
    
    }
    return newArray;
  }

  var bubbleArray = bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
  var selectionArray = selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);

  console.log(bubbleArray);
  console.log(selectionArray);