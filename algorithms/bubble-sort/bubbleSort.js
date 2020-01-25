function bubbleSort (sortThisArray) {
    var temp, i, j
    var length = sortThisArray.length - 1
    
    for(i=0; i<= length; i++) {
        for (j=i+1; j<= length; j++) {
            if (sortThisArray[i] > sortThisArray[j]) {
                temp = sortThisArray[i]
                sortThisArray[i] = sortThisArray[j]
                sortThisArray[j] = temp
            }
        }
    }
    console.log("result",sortThisArray)

}
bubbleSort([3, 5, 8, 2, 0, 9])