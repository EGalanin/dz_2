function prime_numbers(n){
    const arr = [];
    nextNum:
    for (let i = 2; arr.length < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextNum;
        }
        arr.push(i)
    }
    return arr
}
// console.log(prime_numbers(8))
console.time("prime_numbers")
console.log(prime_numbers(process.argv[2]));
console.timeEnd("prime_numbers")






