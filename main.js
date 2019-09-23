// https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering

var arr = [0, 1, 2];

// possible err in the start of this loop is I don't know if "arr.length + 1" is enough here
for (let t = 0; t < arr.length + 1; t++) {

    // Step 1
    let largestI = -1;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            largestI = i;
        }
    }

    if (largestI === -1) {
        console.log('largestI not set')
        break
    }

    //step 2
    let largestJ = -1;
    for (let j = 0; j < arr.length; j++) {
        if (arr[largestI] < arr[j]) {
            largestJ = j
        } 
    }
    //step 3
    swap(arr, largestI, largestJ)

    function swap(a, i, j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    //step 4

    let endArray = arr.splice(largestI + 1)
    endArray.reverse()
    arr = arr.concat(endArray)

    console.log(arr)
}

