const fs = require("fs");
const path = require("path");
const { green } = require("console-log-colors");

let filename;
let mainDirectory = process.env.REPORT;

const start = () => {
  let info;
  if (process.argv[2]) {
    filename = process.argv[2];
  } else {
    filename = "input.json";
    console.log("Setting standart filename: input.json");
  }
  try {
    info = JSON.parse(fs.readFileSync(`${mainDirectory}${filename}`, "utf-8"));
    console.log(green("JSON file info:"));
    console.log(info);
  } catch (e) {
    info = null;
  }
  return info;
};

module.exports = { start };
