// Problem 1
/*function signature/sample */
function calculateMoney(ticketSale) {
    if (typeof ticketSale !== 'number' || ticketSale <= 0) {
        return 'Invalid Number';
    }
    // You have to write your code here
    else {
        const ticketPrice = 120;
        const secuirityGuard = 500;
        const lunchCost = 8 * 50;
        const saleTicket = ticketPrice * ticketSale;
        const totalcost = secuirityGuard + lunchCost;
        const total = saleTicket - totalcost;
        return total;
    }

}
// const mot = calculateMoney(-130);
// console.log(mot);

// Problem 2

/*function signature/sample */
function checkName(name) {
    //write your code here
    if (typeof name !== 'string') {
        return 'invalid';
    }
    const lastLetter = name[name.length - 1].toLowerCase();
    const letters = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    if (letters.includes(lastLetter)) {
        return 'Good Name';
    }
    return 'Bad Name';
}
// const name = checkName(199);
// console.log(name);


// Problem 3 

/*function signature/sample */
function deleteInvalids(array) {
    // You have to write your code here
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }
    const newArray = [];
    for (const arr of array) {
        // console.log(arr);
        if (typeof arr === 'number' && !isNaN(arr)) {
            newArray.push(arr);
        }
    }
    return newArray;
}
// const input= deleteInvalids({num: [ 1 , 2 , 3 ]});
// console.log(input);

// Problem 4

/*function signature/sample */
function password(obj) {
    //write your code here
    if (typeof obj !== 'object' || obj === null) {
        return 'invalid';
    }
    else if (!obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4) {
        return 'invalid';
    }
    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName = obj.siteName;
    const firstLetter = siteName[0].toUpperCase();
    const withoutFirstLetter = siteName.slice(1);
    const pass = `${firstLetter}${withoutFirstLetter}#${name}@${birthYear}`;
    return pass;
}
// const pass = password({ name: "maisha", birthYear: 2002 });

// console.log(pass);


// problem 5

/*function signature/sample */
function monthlySavings(arr, livingCost) {
    // You have to write your code here
    if (!Array.isArray(arr) || typeof livingCost !== 'number' || livingCost <= 0) {
        return 'invalid input';
    }
    let taxTotal = 0;
    let withoutTaxTotal = 0;
    for (const payment of arr) {
        if (payment >= 3000) {
            const tax = payment * 20 / 100;
            const save = payment - tax;
            taxTotal = taxTotal + save;
        }
        else if (payment < 3000) {
            const withoutTax = payment;
            withoutTaxTotal = withoutTaxTotal + withoutTax;
        }
    }

    const total = taxTotal + withoutTaxTotal;
    const totalSavings = total - livingCost;
    if (totalSavings >= 0) {
        return totalSavings;
    }
    else {
        return 'earn more';
    }
}
// const totalSavings = monthlySavings([900, 2700, 3400] , 10000);
// console.log(totalSavings);

