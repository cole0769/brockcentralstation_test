const dbConfig = require("../config/db.config.js");
const Pool = require('mssql').Pool
const pool = new Pool({
    user:  dbConfig.USER,
    host: dbConfig.HOST,
    database: dbConfig.DB,
    password: dbConfig.PASSWORD, 
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
  });

// const getCustomerAccount = () => {
//     return new Promise(function(resolve, reject) {
//       pool.query("SELECT TOP 10 * FROM dbo.DW_SalesInvoicesMonthlybyCustomer \
//                 WHERE CustAccountNum = '170286';", (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         resolve(results.rows);
//       })
//     }) 
//   }

