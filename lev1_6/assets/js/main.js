let date1 = new Date(1999, 10, 5, 15) //PM
let date2 = new Date()
let date3 = new Date(2019, 12, 3, 12) //PM
let date4 = new Date(2000, 1, 1, 11) //AM

const period = (hour) => {
    let time = hour.getHours();

    if(time < 12){
        return console.log("AM");
    }else if (time >= 12) {
        console.log("PM");
    }else{}
}

period(date1);
period(date2);
period(date3);
period(date4);