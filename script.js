function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = 'AM';

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    let time = hour + ' ' + ':' + ' ' + min + ' ' + ':' + ' ' + sec + ' ' + session;

    document.getElementById('clock').innerText = time;

    const timeOut = setTimeout(function () { currentTime() }, 1000);

    if (hour === 00) {
        hour = 12;
    }
    else if (hour > 12) {
        hour = hour - 12;
        session = 'PM';
    }
}

function updateTime(k) {
    if (k < 10) {
        return '0' + k;
    }
    else {
        return k;
    }
}

console.log(currentTime());