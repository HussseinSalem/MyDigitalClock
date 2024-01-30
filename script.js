function updateTime() {
    var now = new Date();
    var daysOfWeek = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    var dayOfWeek = daysOfWeek[now.getDay()];

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    var dateString = dayOfWeek + " " + now.toLocaleDateString();

    document.getElementById("time").innerText = timeString;
    document.getElementById("date").innerText = dateString;
}

setInterval(updateTime, 1000);
updateTime();
