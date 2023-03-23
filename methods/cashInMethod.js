const cashInMethod = (cash, operationInfo) => {
  let commission = (cash * operationInfo.percents) / 100;
  if (commission <= operationInfo.max.amount) {
    return commission;
  } else {
    return operationInfo.max.amount;
  }
};

module.exports = { cashInMethod };
