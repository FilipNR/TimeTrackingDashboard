fetch("data.json") .then(response => response.ok ? response.json()  : Error("error"))
    .then(data => {
        document.getElementById("daily").addEventListener("click", () => {
            // change daily current time
            document.getElementById("workCurrent").innerHTML = `${data[0].timeframes.daily.current}hrs`
            document.getElementById("playCurrent").innerHTML = `${data[1].timeframes.daily.current}hrs`
            document.getElementById("studyCurrent").innerHTML = `${data[2].timeframes.daily.current}hrs`
            document.getElementById("exerciseCurrent").innerHTML = `${data[3].timeframes.daily.current}hrs`
            document.getElementById("socialCurrent").innerHTML = `${data[4].timeframes.daily.current}hrs`
            document.getElementById("selfcareCurrent").innerHTML = `${data[5].timeframes.daily.current}hrs`
            // change daily previous time
            document.getElementById("workPrevious").innerHTML = `Last day - ${data[0].timeframes.daily.previous}hrs`
            document.getElementById("playPrevious").innerHTML = `Last day - ${data[1].timeframes.daily.previous}hrs`
            document.getElementById("studyPrevious").innerHTML = `Last day - ${data[2].timeframes.daily.previous}hrs`
            document.getElementById("exercisePrevious").innerHTML = `Last day - ${data[3].timeframes.daily.previous}hrs`
            document.getElementById("socialPrevious").innerHTML = `Last day - ${data[4].timeframes.daily.previous}hrs`
            document.getElementById("selfcarePrevious").innerHTML = `Last day - ${data[5].timeframes.daily.previous}hrs`
        })
        document.getElementById("weekly").addEventListener("click", () => {
            // change weekly current time
            document.getElementById("workCurrent").innerHTML = `${data[0].timeframes.weekly.current}hrs`
            document.getElementById("playCurrent").innerHTML = `${data[1].timeframes.weekly.current}hrs`
            document.getElementById("studyCurrent").innerHTML = `${data[2].timeframes.weekly.current}hrs`
            document.getElementById("exerciseCurrent").innerHTML = `${data[3].timeframes.weekly.current}hrs`
            document.getElementById("socialCurrent").innerHTML = `${data[4].timeframes.weekly.current}hrs`
            document.getElementById("selfcareCurrent").innerHTML = `${data[5].timeframes.weekly.current}hrs`
            // change weekly previous time
            document.getElementById("workPrevious").innerHTML = `Last week - ${data[0].timeframes.weekly.previous}hrs`
            document.getElementById("playPrevious").innerHTML = `Last week - ${data[1].timeframes.weekly.previous}hrs`
            document.getElementById("studyPrevious").innerHTML = `Last week - ${data[2].timeframes.weekly.previous}hrs`
            document.getElementById("exercisePrevious").innerHTML = `Last week - ${data[3].timeframes.weekly.previous}hrs`
            document.getElementById("socialPrevious").innerHTML = `Last week - ${data[4].timeframes.weekly.previous}hrs`
            document.getElementById("selfcarePrevious").innerHTML = `Last week - ${data[5].timeframes.weekly.previous}hrs`
        })
        document.getElementById("monthly").addEventListener("click", () => {
            // change monthly current time
            document.getElementById("workCurrent").innerHTML = `${data[0].timeframes.monthly.current}hrs`
            document.getElementById("playCurrent").innerHTML = `${data[1].timeframes.monthly.current}hrs`
            document.getElementById("studyCurrent").innerHTML = `${data[2].timeframes.monthly.current}hrs`
            document.getElementById("exerciseCurrent").innerHTML = `${data[3].timeframes.monthly.current}hrs`
            document.getElementById("socialCurrent").innerHTML = `${data[4].timeframes.monthly.current}hrs`
            document.getElementById("selfcareCurrent").innerHTML = `${data[5].timeframes.monthly.current}hrs`
            // change monthly previous time
            document.getElementById("workPrevious").innerHTML = `Last month - ${data[0].timeframes.monthly.previous}hrs`
            document.getElementById("playPrevious").innerHTML = `Last month - ${data[1].timeframes.monthly.previous}hrs`
            document.getElementById("studyPrevious").innerHTML = `Last month - ${data[2].timeframes.monthly.previous}hrs`
            document.getElementById("exercisePrevious").innerHTML = `Last month - ${data[3].timeframes.monthly.previous}hrs`
            document.getElementById("socialPrevious").innerHTML = `Last month - ${data[4].timeframes.monthly.previous}hrs`
            document.getElementById("selfcarePrevious").innerHTML = `Last month - ${data[5].timeframes.monthly.previous}hrs`
        })
    })