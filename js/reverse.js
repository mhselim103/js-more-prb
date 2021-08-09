const greetings = 'hello world';

// reverese string 
function reversed(text) {
    let reverse = '';
    for (const letter of greetings) {
        // console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}

const reverseText = reversed(greetings);
console.log(reverseText);
