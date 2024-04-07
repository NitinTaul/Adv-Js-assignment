function isNonPrime(B) {
    let count = 0;
    for (let i = 2; i <= B; i++) {
        if (B % i === 0) {
            count++;
        }
        if (count > 1) {
            return true; 
        }
    }
    return false;
}

function identifyNonPrimesFrom2toB(B) {
    const nonPrimes = [];
    for (let i = 2; i <= B; i++) {
        if (isNonPrime(i)) {
            nonPrimes.push(i);
        }
    }
    return nonPrimes;
}

const B = 10;
console.log(`Non-prime numbers between 2 and ${B}:`, identifyNonPrimesFrom2toB(B));
