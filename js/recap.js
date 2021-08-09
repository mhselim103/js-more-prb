function largestElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}
const num = [2, 3, 5, 58, 98, 45, 37, 296, 18];
console.log(largestElement(num));