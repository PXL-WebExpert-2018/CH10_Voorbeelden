// app2.js - logger.js exporteert nu een class met verschillende methods.
const logger = require('./logger2');
const myLog = logger(); // functie invoking
myLog.info('Dit is informatie');
myLog.error('Dit is een foutmelding');
