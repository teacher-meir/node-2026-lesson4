// לאחר ההתקנה אפשר להשתמש במודול המותקן כמו שהשתמשנו במודולים שיצרנו
// require כלומר ניתן לייבא עם

const Person = require("./Person");

const p1 = new Person('שקד', new Date(2007, 0, 28));
console.log(p1.toString());

console.log(100);