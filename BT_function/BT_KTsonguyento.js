function checkPrime(number) {
    if (number < 2) {
        return false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
    }
    return true;
}

let count = 0;
let i = 2;
while (i < 1000) {
    if (checkPrime(i)) {
        document.write(i + "_");
    }
    i++
}