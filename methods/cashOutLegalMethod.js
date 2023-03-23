const cashOutLegalMethod = (cash, operationInfo) => {
    let commission = (cash*operationInfo.percents)/100
        if (commission>= operationInfo.min.amount) {
            return commission
        } else {
            return 0.50
        }
    }
    
module.exports = {cashOutLegalMethod}