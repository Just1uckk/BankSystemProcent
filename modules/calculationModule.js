const {cashInMethod} = require('./../methods/cashInMethod')
const {cashOutLegalMethod} = require('./../methods/cashOutLegalMethod')
const {cashOutNaturalMethod} = require('./../methods/cashOutNaturalMethod')

const calculation = async(startInfo,cashIn,cashOutLegal,cashOutNatural) => {
    console.log(startInfo)
    console.log(cashIn)
    console.log(cashOutLegal)
    console.log(cashOutNatural)
    let limit = []
     startInfo.forEach(element => {
         if (element.type === 'cash_in') {
            let commission = cashInMethod(element.operation.amount,cashIn)
             console.log(commission)
         } else if (element.type === 'cash_out') {
             if (element.user_type === 'juridical') {
                 let commission = cashOutLegalMethod(element.operation.amount,cashOutLegal)
                  console.log(commission)
             } else if (element.user_type === 'natural') {
                result = cashOutNaturalMethod(element,cashOutNatural,limit)
                limit = result.limit
                console.log(result.commission)
             }
         }
     });
}

module.exports = {calculation}