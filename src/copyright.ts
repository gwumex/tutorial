let year: HTMLElement | null
year = document.getElementById("year")
console.log(year);
let thisYear: string
thisYear = new Date().getFullYear().toString()
console.log(thisYear);
// if (year) {
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
//     console.log(thisYear);
// }
