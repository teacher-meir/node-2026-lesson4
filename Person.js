// import { formatJewishDateInHebrew, toJewishDate } from "jewish-date";
const { formatJewishDateInHebrew, toJewishDate } = require("jewish-date");

module.exports = class Person {
    constructor(name, bornDate) {
        this.name = name;
        this.bornDate = bornDate;
    }

    toString() {
        const jewishDate = toJewishDate(this.bornDate);
        const jewishDateInHebrewStr = formatJewishDateInHebrew(jewishDate);
        return `${this.name} נולד ב${jewishDateInHebrewStr}`;
    }
}