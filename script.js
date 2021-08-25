function updateTime(t) {
    if (t <= 9) {
        return '0' + t;
    }
    else {
        return t;
    }
}

function currentTime() {
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = 'AM';

    day = updateTime(day);
    month = updateTime(month);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    if (hour === 00) {
        hour = 12;
    }
    else if (hour > 12) {
        hour = hour - 12;
        session = 'PM';
    }

    const time = hour + ' ' + ':' + ' ' + min + ' ' + ':' + ' ' + sec + ' ' + session;
    const currentDate = day + ' ' + '-' + ' ' + month + ' ' + '-' + ' ' + year;

    document.getElementById('clock').innerText = time;
    document.getElementById('day').innerHTML = weekDays[date.getDay()];
    document.getElementById('date').innerText = currentDate;

    const timeOut = setTimeout(function () { currentTime() }, 1000);
}

currentTime();