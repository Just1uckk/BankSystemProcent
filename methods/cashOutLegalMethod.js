const cashOutLegalMethod = (cash, operationInfo) => {
  let commission = (cash * operationInfo.percents) / 100;
  if (commission >= operationInfo.min.amount) {
    return commission;
  } else {
    return 0.5;
  }
};

module.exports = { cashOutLegalMethod };
