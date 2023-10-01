function countNumber() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 7 === 0) {
            count++;
        }
    }
    return count;
}

console.log(`Total count: ` + countNumber());