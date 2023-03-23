const weekOfTheYear = (date) => {
  const today = new Date(date);
  const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  const pastDaysOfYear =
    (today.valueOf() - firstDayOfYear.valueOf()) / 86400000;
  const weekOfYear = Math.ceil(
    (pastDaysOfYear + firstDayOfYear.getDay() - 1) / 7
  );
  return weekOfYear;
};

const cashOutNaturalMethod = (element, operationInfo, limit) => {
  const week = weekOfTheYear(element.date);
  let commission = 0;
  if (!limit.length) {
    if (element.operation.amount <= operationInfo.week_limit.amount) {
      limit.push({
        user_id: element.user_id,
        totalCash: element.operation.amount,
        week,
      });
    } else {
      commission =
        (element.operation.amount - operationInfo.week_limit.amount) *
        (operationInfo.percents / 100);
      limit.push({
        user_id: element.user_id,
        totalCash: element.operation.amount,
        week,
      });
    }
  } else {
    const index = limit.findIndex((el) => {
      if (el.user_id === element.user_id) {
        return true;
      }
    });
    if (index === -1) {
      if (element.operation.amount <= operationInfo.week_limit.amount) {
        limit.push({
          user_id: element.user_id,
          totalCash: element.operation.amount,
          week,
        });
      } else {
        commission =
          (element.operation.amount - operationInfo.week_limit.amount) *
          (operationInfo.percents / 100);
        limit.push({
          user_id: element.user_id,
          totalCash: element.operation.amount,
          week,
        });
      }
    } else {
      let pastUser = limit[index];
      limit.splice(index, 1);
      if (pastUser.week === week) {
        if (pastUser.totalCash > operationInfo.week_limit.amount) {
          commission =
            element.operation.amount * (operationInfo.percents / 100);
          limit.push({
            user_id: element.user_id,
            totalCash: pastUser.totalCash + element.operation.amount,
            week,
          });
        } else if (
          pastUser.totalCash + element.operation.amount >
          operationInfo.week_limit.amount
        ) {
          commission =
            (pastUser.totalCash +
              element.operation.amount -
              operationInfo.week_limit.amount) *
            (operationInfo.percents / 100);
          limit.push({
            user_id: element.user_id,
            totalCash: pastUser.totalCash + element.operation.amount,
            week,
          });
        } else {
          limit.push({
            user_id: element.user_id,
            totalCash: pastUser.totalCash + element.operation.amount,
            week,
          });
        }
      } else {
        if (element.operation.amount <= operationInfo.week_limit.amount) {
          limit.push({
            user_id: element.user_id,
            totalCash: element.operation.amount,
            week,
          });
        } else {
          commission =
            (element.operation.amount - operationInfo.week_limit.amount) *
            (operationInfo.percents / 100);
          limit.push({
            user_id: element.user_id,
            totalCash: element.operation.amount,
            week,
          });
        }
      }
    }
  }

  return { limit, commission };
};

module.exports = { cashOutNaturalMethod };
