class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time && callback){  
            
            if (this.alarmCollection.length > 0) {
                for (let i = 1; i < this.alarmCollection.length; i=i+1) {
                    if (this.alarmCollection[i-1].time === time) {
                    console.warn('Уже присутствует звонок на это же время');
                    }
                }
            }
            this.alarmCollection.push({time:time, callback:callback, canCall:true});
            
        } else {
            throw new Error ('Отсутствуют обязательные аргументы');
        }
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((element) => element.time !== time);
    }

    getCurrentFormattedTime() {
        let carrentDate = new Date;
        let hour = carrentDate.getHours();
        if (hour < 10) {
            hour = '0'+hour;
        }
        let minute = carrentDate.getMinutes()
        if (minute < 10) {
            minute = '0'+minute;
        }
        return (hour+':'+minute);
    }

    start() {
        if (this.intervalId) {
            
        } else {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((element) => {
                    if (element.time === this.getCurrentFormattedTime() && element.canCall) {
                        element.canCall = false;
                        element.callback();
                    }
                });
            }, 1000);
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach((element) => element.canCall = true);
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}