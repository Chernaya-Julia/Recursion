// Вывод все натуральные числа от 1 до N 
function printNumber(minN, maxN) {
    console.log(minN);
    return (maxN==minN) ? maxN : printNumber(minN+1, maxN);
}
printNumber(1,10); 