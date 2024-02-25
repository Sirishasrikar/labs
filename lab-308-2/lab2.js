const pi = 3.1415;
const radius = 5;
const area = pi * radius * radius;
console.log(`Total area is : ${area}sq m2 \n`);
const areaPerPlant = 0.8;
const week1plants = 20;
const week2Plants = 40;
const week3Plants = 80;
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

