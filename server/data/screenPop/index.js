'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getCustAccountByPhone = async(phoneNo) => {
    try {
        // connect to database
        let pool = await sql.connect(config.sql); 
        // load sql query files found in the folder
        const sqlQueries = await utils.loadSqlQueries('screenPop'); 
        // run sql query from the applied script name
        const accountList = await pool.request()
                                    .input('phoneNo', sql.VarChar(40), phoneNo)
                                    .query(sqlQueries.getCustAccountByPhone); 
         // return the record set
        return accountList.recordset;
    } catch (error) {
        return error.message
    }
}

module.exports = {
    getCustAccountByPhone
}
