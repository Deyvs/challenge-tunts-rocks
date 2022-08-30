const countriesService = require('../service/countriesService');
const sheetService = require('../service/sheetService');

const countriesSheetHandler = async () => {
    console.log("-> [handler] - Start request to get all countries data service")
    const countriesData = await countriesService.getAllCountriesData();
    console.log("-> [hanlder] - End request to get all countries data service")

    console.log("-> [handler] - Creating xlsx file")
    sheetService.create(countriesData);
    console.log("-> [handler] - xlsx file created")
    
}

module.exports = {
    countriesSheetHandler
}