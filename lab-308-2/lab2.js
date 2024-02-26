const pi = 3.1415;
const radius = 5;
const area = (pi * radius * radius);
console.log(`Total area is : ${area}sq m2 \n`);
const areaPerPlant = 0.8;
const week1plants = 20;
const week2Plants = 40;
const week3Plants = 80;
const scientistPlanted = 100;

const growthweek1 = (week1plants * areaPerPlant);
console.log(`Growth in week 1 is : ${growthweek1}sq m2 \n`);
const growthweek2 = (week2Plants * areaPerPlant) + growthweek1;
console.log(`Growth in week 2 is : ${growthweek2}sq m2 \n`);
const growthweek3 = (week3Plants * areaPerPlant) + growthweek2;
console.log(`Growth in week 3 is : ${growthweek3}sq m2 \n`);
const plantGrowth80 = area * 80 / 100;
console.log(`plant growth with 80% : ${plantGrowth80} \n`);
const plantGrowth50 = area * 50 / 100;
console.log(`plant growth with 50% : ${plantGrowth50} \n`);
try {
    if (scientistPlanted * areaPerPlant > area) {
        throw new Error(`Not enough space to accomodate the plants`);
    }
// week 1 status check logic
if (growthweek1 <= plantGrowth50) {
    console.log("week 1 growth status is : Planted");
} else if (growthweek1 > plantGrowth50 && growthweek1 <= plantGrowth80) {
    console.log("week 1 growth status is : Monitored");
} else { console.log("week 1 growth status is : Pruned") }
// week 2 status check logic
if (growthweek2 <= plantGrowth50) {
    console.log("week 2 growth status is : Planted");
} else if (growthweek2 > plantGrowth50 && growthweek2 <= plantGrowth80) {
    console.log("week 2 growth status is : Monitored");
} else { console.log("week 2 growth status is : Pruned") }
// week 3 status check logic
if (growthweek3 <= plantGrowth50) {
    console.log("week 3 growth status is : Planted");
} else if (growthweek3 > plantGrowth50 && growthweek3 <= plantGrowth80) {
    console.log("week 3 growth status is : Monitored");
} else { console.log("week 3 growth status is : Pruned") }


    } catch (error) {
        console.error(error.message);
    }

const initialPlantCount = 100;
const weeks = 10;
let plantCount = initialPlantCount;

// Simulate plant growth for 10 weeks without pruning
for (let i = 1; i <= weeks; i++) {
    plantCount *= 2;
}

// Calculate the additional space required
const additionalSpaceRequired = ((initialPlantCount * areaPerPlant) - area);
console.log(initialPlantCount);
console.log(areaPerPlant);
console.log(area);
console.log(additionalSpaceRequired);

console.log(`Additional space required: ${additionalSpaceRequired} square meters`);

// Calculate the radius of the expanded garden if it remained circular
const expandedRadius = ((area + additionalSpaceRequired) / pi);

console.log(`Radius of the expanded garden: ${expandedRadius} meters`);

