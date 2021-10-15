module.exports = {
  USER: 'reporting',
  PASSWORD: 'reporting123$',
  DB: 'DwStaging',
  HOST: 'AZ-SQL',
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

