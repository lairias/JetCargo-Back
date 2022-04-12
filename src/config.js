const path = require('path')
const dotenv = require('dotenv')
require('dotenv').config();
// Load config
dotenv.config({ path: '../.env' })

module.exports = {
    JWTSECRET : process.env.JWTSECRET,
    JWTSECRETPASSWORD : process.env.JWTSECRETPASSW,
    
    API_FROND: process.env.API_FROND,
    API_BACK: process.env.API_BACK,
    PORT_FROND:process.env.PORT_FROND,
    PORT_DB:process.env.PORT_DB,
    HOST:process.env.HOST,
    PORT:process.env.PORT,
    PASSWORD:process.env.PASSWORD,
    USER:process.env.USER,  
    DIALECT:process.env.DIALECT,
    DATABASE:process.env.DATABASE,
    
    NAME:process.env.NAME,
    MAIL_HOST:process.env.MAIL_HOST,
    MAIL_PORT:process.env.MAIL_PORT,
    MAIL_USERNAME:process.env.MAIL_USERNAME,
    MAIL_PASSWORD:process.env.MAIL_PASSWORD,
    MAIL_FROM_ADDRESS:process.env.MAIL_FROM_ADDRESS,
    
    TWILIO_ACCOUNT_SID:process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN:process.env.TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER:process.env.TWILIO_PHONE_NUMBER,
    
    PAPAL_API_CLIENTE : process.env.PAPAL_API_CLIENTE,
    PAPAL_API_SECRET :process.env.PAPAL_API_SECRET,
    PAPAL_API : process.env.PAPAL_API,
};