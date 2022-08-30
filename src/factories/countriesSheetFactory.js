const countrySheetRowFactory = ({ name, capital, area, currencies }) => {
    const row = [];
    row.push(name.common);
    row.push(extractCapital(capital));
    row.push(area);
    row.push(extractCurrencies(currencies));
    return row;
}

const extractCapital = (capitals) => {
    return capitals ? capitals.join(", ") : "-";
}

const extractCurrencies = (currencyObject) => {
    const currencies = [];
    for (let key in currencyObject) {
        currencies.push(key);
    }
    
    return currencies.length > 0 ? currencies.join(", ") : "-";
}

module.exports = {
    countrySheetRowFactory
}