"use strict";
function calculateTax(income, taxYear = 1000) {
    if (taxYear < 50000)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: "mosh",
    retire: (date) => {
        console.log(date);
    }
};
employee.name = ("mosh");
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity;
//# sourceMappingURL=index.js.map