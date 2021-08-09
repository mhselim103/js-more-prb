function animalCount(miles) {
   
    if (miles <= 10) {
        const count = miles * 10;
        return count;
    }
    else if (miles <= 20) {
        const animalsOfFirstSlot = 10 * 10;
        const animalsOfSecondSlot = (miles - 10) * 50;
        const totalAnimals = animalsOfFirstSlot + animalsOfSecondSlot;
        return totalAnimals;
        
    }
}

const animals = animalCount(12);
console.log(animals);