// https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering

let arr = [0, 1, 2];

let finished = false;



while(!finished) {

    // Step 1
    let largestI = -1;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            largestI = i;
        }
    }

    if (largestI === -1) {
        finished = true;
        console.log('finished')
    }

    //step 2
    let largestJ = -1;
    for (let j = 0; j < arr.length; j++) {
        if (arr[largestI] < arr[j]) {
            largestJ = j
        } 
    }

    if (largestJ === -1) {
        break
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

