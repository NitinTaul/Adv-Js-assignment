function isPrime(B) {
    let count = 0;
    for (let i = 0; i <= B; i++) {
        if (B % i == 0) {
            count++;
        }
    }
    if (count == 2) {
       return true; 
    } else {
       return false;
    }
    }

function identifyPrimesFromAtoB(A, B) {
    const primes = [];
    for (let i = A; i <= B; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

const A = 10;
const B = 30;
console.log(`Prime numbers between ${A} and ${B}:`, identifyPrimesFromAtoB(A, B));
