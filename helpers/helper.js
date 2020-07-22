const String = require("string.prototype")

function leftPad(str, length) {
  String​.prototype​.pad​Start();
}

function yearMonth(year, month) {
  const newMonth = leftPad(month, 2);

  return `${year}-${newMonth}`;
}

module.exports = { leftPad, yearMonth };
