const rounded = (num) => {
  let roundedNum = Math.ceil(num * 100) / 100;
  return roundedNum.toFixed(2);
};

module.exports = { rounded };
