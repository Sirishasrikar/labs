for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i, 'Fizz');
    } else if (i % 5 === 0) {
        console.log(i, 'Buzz');
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, 'FizzBuzz');
    }
}
console.log(`________________________________________________________________________ \n`);
let num = 331;
let count = 0;
let foundPrime = false;
while (!foundPrime) {
    // console.log(num++);
    // count++;
    let isPrime = true;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && num > 1) {
        console.log(num + " is prime");
        foundPrime = true;
    }
    num++;
}

console.log(`________________________________________________________________________ \n`);

let dataGiven = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let rows = (dataGiven.split(/[\n]/));

console.log(rows);
// for (let i=0; i< rows;i++){
//     rows[i] = rows[i] + "\n"
// }

// if (dataGiven.split(',')){
//     console.log(rows + "\n");
// let cell1 = "ID,Name,Occupation,Age";
// let cell2 = "42,Bruce,Knight,41";
// let cell3 = "57,Bob,Fry Cook,19";
// let cell4 = "63,Blaine,Quiz Master,58";
// let cell5 = "8,Bill,Doctors Assistant,26";

