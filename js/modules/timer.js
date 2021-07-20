function timer(id, deadline) {

    function date(endline) {
        let t = Date.parse(endline) - Date.parse(new Date()),
            sec = Math.floor(t / 1000) % 60,
            min = Math.floor(t / 1000 / 60) % 60,
            hour = Math.floor(t / 1000 / 60 / 60) % 24,
            day = Math.floor(t / 1000 / 60 / 60 / 24);

        if (sec < 10) {
            sec = "0" + Math.floor(t / 1000) % 60;
        } else if (min < 10) {
            min = "0" + Math.floor(t / 1000 / 60) % 60;
        } else if (hours < 10) {
            hour = Math.floor(t / 1000 / 60 / 60);
        }

        return {
            "total": t,
            "seconds1": sec,
            "min": min,
            "hours": hour,
            "day": day
        };
    }

    function interval(selector, endline) {

        let timerInt = setInterval(clock, 1000);

        function clock() {
            let timer = document.querySelector(selector),
                days = document.querySelector("#days"),
                hours = document.querySelector("#hours"),
                minutes = document.querySelector("#minutes"),
                seconds = document.querySelector("#seconds");

            let t = date(endline);
            days.textContent = t.day;
            hours.textContent = t.hours;
            minutes.textContent = t.min;
            seconds.textContent = t.seconds1;

            if (t.total <= 0) {
                mins.textContent = "00";
                hours.textContent = "00";
                seconds.textContent = "00";
                clearInterval(timeInt);
            }
        }
    }

    date(deadline);
    interval(id, deadline);

}

export default timer;