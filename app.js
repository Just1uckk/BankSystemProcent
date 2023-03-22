const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')
const { color, log, red, green } = require('console-log-colors');
dotenv.config()

let filename
let mainDirectory = process.env.REPORT

const start = async() => {
    if (process.argv[2]) {
        filename = process.argv[2]
    } else {
        filename = 'input.json'
        console.log('Setting standart filename: input.json')
    }

    try {
        let info = JSON.parse(fs.readFileSync(`${mainDirectory}${filename}`,'utf-8'))
        console.log(green('JSON file info:'))
        console.log(info)   
    } catch (e) {
        console.log(red('Invalid file name'))
    }
}
start()