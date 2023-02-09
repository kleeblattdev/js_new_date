
let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + " Monat");
console.log(date.getDay() + " Tag");
console.log(date.getHours() + " Stunde");
console.log(date.getMinutes() + " Minute");
console.log(wochenTag[date.getDay()]);
console.log(monate[date.getMonth()]);

////

document.querySelector("#day").innerHTML = wochenTag[date.getDay()];
document.querySelector("#hour").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() ;
