const names = ['abul', 'habul', 'selim', 'ridwan', 'hasib', 'mehedi', 'wasti', 'selim', 'ridwan', 'hasib', 'mehedi']

function removeDuplicate(names) {
    const unique = [];
    const duplicate = [];
    /* for (let i = 0; i < names.length; i++) {
        const element = names[i];
        // console.log(element);
        if (unique.indexOf(element)) {
            unique.push(element);
        }
        
    } */


        // for of 

    for (const element of names) {
        // console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
        else {
            duplicate.push(element);
        }
        
    }
    // duita value eksathe return korte chaile return k ekta alada array er moddhe rakhte hobe 
    return [unique, duplicate];
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);