for (let i = 0; i <= 50; i++) {

    if (i % 3 == 0) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('foobar');
        }
        else {
            console.log('foo');
        }
    }
    else if (i%5==0) {
        console.log('var');
    }
    
    
    else {
        console.log(i);
    }
}