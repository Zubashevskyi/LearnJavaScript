// У нас є клас Clock. На даний момент він виводить час кожну секунду.

// Створіть новий клас ExtendedClock, який успадковує від Clock і додає precision – кількість мс між “цоканнями”. Типово, інтервал повинен бути 1000 (1 секунда).

// Ваш код повинен бути у файлі extended-clock.js
// Не змінюйте оригінал clock.js. Розширте його.

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


//виконання ==================================================================================================


class ExtendedClock extends Clock {
  constructor(options) {
    super(options)
    let { precision = 1000 } = options
    this.precision = precision
  }

  start() {
    this.render()
    this.timer = setInterval(() => this.render(), this.precision)
  }
}

let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 10000
});

lowResolutionClock.start();