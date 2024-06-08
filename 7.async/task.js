class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time === undefined || callback === undefined || time === null || callback === null) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		if (this.alarmCollection.time === time && this.alarmCollection.callback === callback) {
			console.warn('Уже присутствует звонок на это же время');
			return;
		}

		this.alarmCollection.push({
			callback: callback,
      		time: time,
      		canCall: true,
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
	}

	getCurrentFormattedTime() {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		if (hours < 10) {
			hours = '0' + hours;
		}
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		return hours + ':' + minutes;
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(item => {
				if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
					item.canCall = false;
					item.callback();
				}
			});
		}, 1000);
	}

	stop() {
		if (this.intervalId === null) {
			return;
		}
		clearInterval(this.intervalId);
		this.intervalId = null;
	}
	resetAllCalls() {
		this.alarmCollection.forEach((item) => {
			item.canCall = true;
		});
	}
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}