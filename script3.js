// Сумма всех цифр числа
function sumOfNumbers(n) {
    return (n<10) ? n : n%10 + sumOfNumbers(Math.trunc(n/10));
}
console.log(sumOfNumbers(12345));