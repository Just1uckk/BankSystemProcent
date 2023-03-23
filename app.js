const dotenv = require("dotenv");
dotenv.config();

const { start } = require("./modules/startModule");
const { fetchAPI } = require("./modules/fetchModule");
const { calculation } = require("./modules/calculationModule");

const MainApp = async () => {
  const startInfo = await start();
  const { infoCashIn, infoCashOutLegal, infoCashOutNatural } = await fetchAPI();
  await calculation(
    startInfo,
    infoCashIn,
    infoCashOutLegal,
    infoCashOutNatural
  );
};
MainApp();
