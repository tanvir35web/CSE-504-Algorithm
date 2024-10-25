function fibonacciOfOneToTen(n) {
    if(n==0) {
        return;
    } else {
        console.log(n); 
        fibonacciOfOneToTen(n-1);
    }
}

fibonacciOfOneToTen(10);