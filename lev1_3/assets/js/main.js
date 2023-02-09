let date = new Date();
console.log(date);

date.setFullYear(2222);
date.setMonth(9);
date.setDate(23);
date.setHours(13);
date.setMinutes(25);
date.setSeconds(11);
document.write(date + "<br>")

let date2 = date; 
date2.setFullYear(2123), date2.setMonth(1), date2.setDate(24)
document.write(date2+ "<br>");

let date3 = date2;
date3.setMonth(2),
document.write(date3+ "<br>");

let date4 = date3;
date4.setDate(3);
document.write(date4+ "<br>");

let date5 = new Date();
date5.setDate(date5.getDate() +30)
document.write(date5+ "<br>");