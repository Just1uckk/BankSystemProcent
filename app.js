const dotenv = require('dotenv')
dotenv.config()

const {start,info} = require('./modules/startModule')
const {fetchAPI,infoCashIn,infoCashOutLegal,infoCashOutNatural} = require('./modules/fetchModule')

start()
fetchAPI()