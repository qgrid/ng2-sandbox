export class Helper {

  static getDate() {
    let today: Date | string = new Date();
    let day: number | string = today.getDate();
    let month: number | string = today.getMonth() + 1;
    let minutes: number | string = today.getMinutes();

    const hours = today.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const year = today.getFullYear();

    if (day < 10) {
      day = '0' + day;
    }

    if (month < 10) {
      month = '0' + month;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    today = month + '/' + day + '/' + year + ' ' + hours + ':' + minutes + ampm;

    return today;
  }

  static settings() {
    return {
      pagination: ['size']
    };
  }

  static isValidForm(value, array) {
    return this.stringNotEmpty(value) && this.uniqTitle(value, array);
  }

  static stringNotEmpty(value) {
    return !!value;
  }

  static uniqTitle(value, array) {
    const title = value.toLowerCase();
    return !array.some(set => set.title.toLowerCase() === title);
  }

}
