var timeoutHandle;
function countdown(hours, minutes, seconds) {
    function tick() {
        var counter = document.getElementById("timer");
        counter.innerHTML = hours.toString() + ":" + minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        seconds--;
        if (seconds >= 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {
            if (minutes >= 1) {
                // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                setTimeout(function () {
                    countdown(0, minutes - 1, 59);
                }, 1000);
            }else {
                if(hours >= 1) {
                    setTimeout(function () {
                        countdown(hours - 1, 59, 59);
                    }, 1000);
                }
            }
        }
    }
    tick();
}

countdown(24, 00, 00);