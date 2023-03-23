const { red, green } = require("console-log-colors");
const { rounded } = require("./../methods/roundedMethod");
const { cashInMethod } = require("./../methods/cashInMethod");
const { cashOutLegalMethod } = require("./../methods/cashOutLegalMethod");
const { cashOutNaturalMethod } = require("./../methods/cashOutNaturalMethod");

const calculation = async (startInfo, cashIn, cashOutLegal, cashOutNatural) => {
  if (!startInfo) {
    console.log(red("Invalid file name"));
    return null;
  }
  let limit = [];
  startInfo.forEach((element) => {
    if (element.type === "cash_in") {
      let commission = cashInMethod(element.operation.amount, cashIn);
      commission = rounded(commission);
      console.log(green(commission));
    } else if (element.type === "cash_out") {
      if (element.user_type === "juridical") {
        let commission = cashOutLegalMethod(
          element.operation.amount,
          cashOutLegal
        );
        commission = rounded(commission);
        console.log(green(commission));
      } else if (element.user_type === "natural") {
        result = cashOutNaturalMethod(element, cashOutNatural, limit);
        let commission = result.commission;
        commission = rounded(commission);
        limit = result.limit;
        console.log(green(commission));
      }
    }
  });
};

module.exports = { calculation };
