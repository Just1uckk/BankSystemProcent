const dotenv = require('dotenv')
dotenv.config()

const {start} = require('./modules/startModule')
const {fetchAPI} = require('./modules/fetchModule')
const {calculation} = require('./modules/calculationModule')

let startInfo
let cashIn
let cashOutNatural
let cashOutLegal

const MainApp = async() => {
    await start().then((info)=>{startInfo = info})
    await fetchAPI().then(({infoCashIn,infoCashOutLegal,infoCashOutNatural})=>{cashIn=infoCashIn,cashOutLegal=infoCashOutLegal,cashOutNatural=infoCashOutNatural})
    await calculation(startInfo,cashIn,cashOutLegal,cashOutNatural)
    
}
MainApp()