const XLSX = require('excel4node');

const TITLE_CELL_CONFIG = [1, 1, 1, 4, true];
const TITLE_CELL_VALUE = "Countries List";
const TITLE_STYLE = {font: {size: 16, color: "#4F4F4F", bold: true}, alignment: {horizontal: 'center'}};
const NAME_CELL_CONFIG = [2, 1];
const HEADS_TITLE_STYLE = {font: {size: 12, color:"#808080", bold:true}};
const NAME_CELL_VALUE = "Name";
const CAPITAL_CELL_CONFIG = [2, 2];
const CAPITAL_CELL_VALUE = "Capital";
const AREA_CELL_CONFIG = [2, 3];
const AREA_CELL_VALUE = "Area";
const CURRENCIES_CELL_CONFIG = [2, 4];
const CURRENCIES_CELL_VALUE = "Currencies";

const create = async (data) => {
    console.log("-> [sheet_service] - Formatting dsata" )
    const workbook = new XLSX.Workbook();
    const worksheet = workbook.addWorksheet('Countries');
    
    generateTitleAndSubtitle(worksheet);
    
    for (let row = 0; row < data.length; row++) {
        for (let col = 0; col < data[row].length; col++) {
            createCell(worksheet, data[row][col], [row+3,col+1])
        }
    }
    
    workbook.write('countries-list.xlsx')
    console.log("-> [sheet_service] - Formatted data")
}

const createCell = (worksheet, data, config, style = {}) => {
    if (typeof data === "number") {
        worksheet.cell(...config).number(data).style({...style, numberFormat: '#.##0,00'});
    } else {
        worksheet.cell(...config).string(data).style(style);
    }
}

const generateTitleAndSubtitle = (worksheet) => {
    createCell(worksheet, TITLE_CELL_VALUE, TITLE_CELL_CONFIG, TITLE_STYLE);
    createCell(worksheet, NAME_CELL_VALUE, NAME_CELL_CONFIG, HEADS_TITLE_STYLE);
    createCell(worksheet, CAPITAL_CELL_VALUE, CAPITAL_CELL_CONFIG, HEADS_TITLE_STYLE);
    createCell(worksheet, AREA_CELL_VALUE, AREA_CELL_CONFIG, HEADS_TITLE_STYLE);
    createCell(worksheet, CURRENCIES_CELL_VALUE, CURRENCIES_CELL_CONFIG, HEADS_TITLE_STYLE);
}

module.exports = {
    create
}