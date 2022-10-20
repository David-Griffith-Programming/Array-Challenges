function alwaysHungry(arr){
    var foodCount = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "food"){
            console.log("yummy")
            foodCount++
        }
    }
    if(foodCount == 0){
        console.log("I'm Hungry")
    }
}


alwaysHungry([3.5,3,5,10,100,-1, "food",-19])



function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]



function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    for(var i=0; i<arr.length; i++) {
       sum = sum + arr[i]
    }

    for(var i=0; i<arr.length; i++){
        if(arr[i] > sum / arr.length){
            count++ 
        }
    }

    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4



function reverse(arr) {
    arr.reverse();
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]



function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i=0; i<fibArr.length; i++){
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2])
        if(fibArr.length > n - 1){
            break;
        }  
    }
    
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
