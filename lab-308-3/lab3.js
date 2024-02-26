for (let i = 1; i <= 100; i++) {
     if (i % 3 === 0) {
        console.log(i, 'Fizz');
    } else if (i %5 === 0){
        console.log(i, 'Buzz');
    }
    if (i % 3 === 0 && i %5 === 0){
        console.log(i, 'FizzBuzz');
    }else 
    console.log(i) }
    console.log(`________________________________________________________________________ \n`);
let num = 63; count = 0;
while(num == 63)
console.log(num++);
count++;
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        console.log(num + ` is not prime`);
        num++;
        if (num % i === 0) {
            console.log(num + ` is not prime`);
            num++;
        break;
    } else {
        console.log(num + ` is prime`);
        break;
    }
}console.log(`________________________________________________________________________ \n`);

let n = 331; // Arbitrary number
let foundPrime = false;

while (!foundPrime) {
    let isPrime = true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime && n > 1) {
        console.log("Next prime number:", n);
        foundPrime = true;
    }

    n++;
}
}