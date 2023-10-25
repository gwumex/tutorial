"use strict";
let year;
year = document.getElementById('year');
let thisYear;
thisYear = new Date().getFullYear().toString();
if (year) {
    year.setAttribute("datetime", thisYear);
    year.textContent = thisYear;
}
//# sourceMappingURL=copyright.js.map