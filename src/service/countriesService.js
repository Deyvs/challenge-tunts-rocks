const restCountries = require('../client/restcountries');
const { countrySheetRowFactory } = require('../factories/countriesSheetFactory');

const getAllCountriesData = async () => {
    console.log("-> [service] - start request to get all countries ")
    const { data } = await restCountries.getAllCountries();
    console.log("-> [service] - end request to get all countries ")
    return data.sort(sortCountriesByName).map(country => countrySheetRowFactory(country));
}

const sortCountriesByName = (a, b) => {
    if ( a.name.common < b.name.common ){
      return -1;
    }
    if ( a.name.common > b.name.common ){
      return 1;
    }
    return 0;
  }
  

module.exports = {
    getAllCountriesData,
}