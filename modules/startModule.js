const fs = require('fs')
const path = require('path')
const { color, log, red, green } = require('console-log-colors');

let filename
let mainDirectory = process.env.REPORT

const start = async() => {
    let info
    if (process.argv[2]) {
        filename = process.argv[2]
    } else {
        filename = 'input.json'
        console.log('Setting standart filename: input.json')
    }

    try {
        info = JSON.parse(fs.readFileSync(`${mainDirectory}${filename}`,'utf-8'))
        console.log(green('JSON file info:'))
        console.log(info)   
    } catch (e) {
        info = null
        console.log(red('Invalid file name'))
    }
    return info
}

module.exports = {start}