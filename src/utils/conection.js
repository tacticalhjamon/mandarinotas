const mariadb = require('mariadb');

// Cambien estos valores, por ahora estara hardcodeado pero despues
// si se puede lo cambiamos a variables del sistema 
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'universidad1',
  connectionLimit: 5
});
