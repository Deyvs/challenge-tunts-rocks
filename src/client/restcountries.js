const axios = require('axios');
const https = require('https');
const URL = 'https://restcountries.com/v3.1/all';

const agent = new https.Agent({  
    rejectUnauthorized: false
  });

const getAllCountries = async () => {

    console.log("-> [client] - Start request all countries on client")

    try {
        console.log("-> [client] - api response ok ")
    return await axios.get(URL, { httpsAgent: agent });
    } catch (error) {
        console.log(`-> [error] >>> ${error}`)
    }
    
}

module.exports = {
    getAllCountries
}