const axios = require("axios");
const { color, log, red, green } = require("console-log-colors");

const fetchAPI = async () => {
  let infoCashIn;
  let infoCashOutNatural;
  let infoCashOutLegal;
  await axios
    .get(process.env.CASH_IN)
    .then((req) => {
      infoCashIn = req.data;
      console.log(green('Request "CASH_IN" was successful'));
    })
    .catch((e) => {
      infoCashIn = null;
      console.log(red('Request "CASH_IN" was failed'));
    });
  await axios
    .get(process.env.CASH_OUT_NATURAL)
    .then((req) => {
      infoCashOutNatural = req.data;
      console.log(green('Request "CASH_OUT_NATURAL" was successful'));
    })
    .catch((e) => {
      infoCashOutNatural = null;
      console.log(red('Request "CASH_OUT_NATURAL" was failed'));
    });
  await axios
    .get(process.env.CASH_OUT_LEGAL)
    .then((req) => {
      infoCashOutLegal = req.data;
      console.log(green('Request "CASH_OUT_LEGAL" was successful'));
    })
    .catch((e) => {
      infoCashOutLegal = null;
      console.log(red('Request "CASH_OUT_LEGAL" was failed'));
    });
  return { infoCashIn, infoCashOutLegal, infoCashOutNatural };
};

module.exports = { fetchAPI };
