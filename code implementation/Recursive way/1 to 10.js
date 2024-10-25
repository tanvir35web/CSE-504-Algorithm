function fibonacciOfOneToTen(n) {
    if(n==0) {
        return;
    } else {
        fibonacciOfOneToTen(n-1);
        console.log(n); 
    }
}

fibonacciOfOneToTen(10);