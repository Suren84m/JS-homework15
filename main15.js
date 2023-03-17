class Clock {
    constructor(hours, minutes, seconds) {
        this._hours = hours;
        this._minutes = minutes;
        this._seconds = seconds;
    }
 start() {
        setInterval(() => {
            this._seconds += 1
            if (this._seconds > 59) {
                this._minutes += 1;
                this._seconds -= 60;
                if (this._minutes > 59) {
                    this._hours += 1;
                    this._minutes -= 60;
                    if (this._hours > 23) {
                        this._hours -= 24
                    }
                }
            }
        }, 1000)
    };
    
    setAlert(hours, minutes, seconds) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, ((hours - this._hours) * 60 * 60 * 1000) + ((minutes - this._minutes) * 60 * 1000) + ((seconds - this._seconds) * 1000))

        })
    };
    setAlert_1(hours, minutes, seconds) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                reject(new Error())
            }, ((hours - this._hours) * 60 * 60 * 1000) + ((minutes - this._minutes) * 60 * 1000) + ((seconds - this._seconds) * 1000))

        })
    };
    setAlert_2(hours, minutes, seconds) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, ((hours - this._hours) * 60 * 60 * 1000) + ((minutes - this._minutes) * 60 * 1000) + ((seconds - this._seconds) * 1000))

        })
    };

};


let clock = new Clock(14, 25, 35);

clock.start();

clock.setAlert(14, 25, 40).then(() => {
    console.log('WAKE UP NOW');
});

clock.setAlert_1(14,25,42).catch((error)=>{
    console.log(error,'WAKE UP IMMIDAILY');
  });

  clock.setAlert_2(14, 25, 44).then(() => {
    console.log('IT IS TOO LATE WAKE UP NOW');
});
