const today = new Date('5/1/2021')
const month = today.getMonth()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var newSelect = document.getElementById("monthsSelect");
var goButton = document.getElementById("goButton");
var input = document.getElementById("input");

months.map(function(month) {
    var opt = document.createElement("option");
    opt.innerHTML = month;
    newSelect.appendChild(opt);
})

goButton.addEventListener("click", printCalendar());

function printCalendar() {
    
}

let days
switch (month) {
    case 1:
        days = 28
        break
    case 3:
    case 5:
    case 8: 
    case 10:
        days = 30
        break
    default:
        days = 31
}
    
let x
const weekday = today.getDay()
for (x = 0; x < weekday; x++){
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
}

let dt = 0
do {
    dt++
    document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
} while ( dt < days)

const monthName = today.toLocaleDateString('default', {month:'long'})
const year = today.getFullYear()
document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`

const remainder = (7 - ((x + dt) % 7))
let y = 0
while ( y < remainder) {
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    y++
}