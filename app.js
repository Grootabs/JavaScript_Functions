console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 == 1) {
            console.log ( i );
        }  else {
            continue;
        }
    }
}
let input = parseInt(prompt("State a Number"));
printOdds (input);



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


function checkAge (userName, age) {
    let aboveSixteen = age >= 16;
    let belowSixteen = age < 16;
    if (aboveSixteen) {
        console.log (`Congrats ${userName}, you can drive!`);
    } else if (belowSixteen){
        console.log (`Sorry ${userName}, but you need to wait until you're 16.`);
    }
}
let userName = prompt("State Your Name");
let age = parseInt(prompt("State Your Age"));
checkAge(userName, age);

// Exercise 3
const determinePosition = (x, y) => {
    switch (true) {
        case x > 0 && y > 0:
            return "Q1";
        case x < 0 && y > 0:
            return "Q2";
        case x < 0 && y < 0:
            return "Q3"; 
        case x > 0 && y < 0:
            return "Q4";
        case x == 0 && y != 0:
            return "x axis";
        case x != 0 && y == 0:
            return "y axis";
        default:
            return "origin";
    }
};

let position = determinePosition(0, 0);
console.log (position);

// Exercise 4
const isValidTriangle = (a, b, c) => {
    return a + b > c && a + c > b && b + c > a;
}

const determineTriangle = (a, b, c) => {
    let isValid = isValidTraingle(a,b,c);

    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral`;
        } else if (a == b || b == c || a == c) {
            return `Isoceles`;
        } else {
            return `scalene`;
        }
    } else {
        return `Not a valid triangle`;
    }
}
console.log(determineTriangle(4,4,4));
console.log(determineTriangle(5,6,7));
console.log(determineTriangle(5,5,3));

//Exercise 5

/*30 day cycles
1. 15 days used, 15 days remaining
2. Average daily use: 3.333 GB/day
3. You are EXCEEDING your average daily use (3.73 GB/day),
4. continuing this high usage, you'll exceed your data plan by 11.9 GB.
5. To stay below your data plan, use no more than 2.93 GB/day. */

const getUsageFeedback = (planLimit, day, usage) => {
    const cycleLength = 30;
    const projectedAvg = getAvg(planLimit / cycleLength);
    const currentAvg = getAvg(usage / days); 
    const projectedUsage= currentAvg * cycleLength;
    const adjustedAvg = getAvg(planLimit - usage, cycleLength - days);

    
    let output = `${days} days used, ${cycleLength - days} days remaining
    Suggested daily use: ${projectedAvg} GB/day`;

    if (currentAvg > projectedAvg) {
        console.log (`${day} days used, ${cycleLength - day} days remaining`);
        console.log (`Average daily use: ${projectedAvg} GB/day`);
    } else if (currentAvg < projectedAvg) {
        console.log (`You are EXCEEDING your average daily use (${currentAvg} GB/day), continuing this high usage, 
        you'll exceed your data plan by ${projectedUsage - planLimit} GB.`)
    } else {
        console.log (`To stay below your data plan, use no more than ${adjustedAvg} GB/day.`)
    }
}

getUsageFeedback (100, 15, 56)