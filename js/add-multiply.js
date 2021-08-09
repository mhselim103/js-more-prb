/* 
chairWood = 3 cft/bed
tableWood = 5cft/bed
bedWood = 45cft/bed
 */


function woodCalculator(chairQnt, tableQnt, bedQnt) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 45;
// wood calculation 
    
    const chairWoodQnt = chairQnt * perChairWood;
    const tableWoodQnt = tableQnt * perTableWood;
    const bedWoodQnt = bedQnt * perBedWood;

    totalwood = chairWoodQnt + tableWoodQnt + bedWoodQnt;
    return totalwood;
}

const firstOption = woodCalculator(0, 0, 1);
console.log(firstOption);