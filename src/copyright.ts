let year: HTMLElement | null
year = document.getElementById('year')
let thisYear: string
thisYear = new Date().getFullYear().toString()
if (year) {
    year.setAttribute("datetime", thisYear)
    year.textContent = thisYear
}
