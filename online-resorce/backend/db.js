// const OracleDB = require('oracledb')

//  OracleDB.outFormat=OracleDB.OUT_FORMAT_OBJECT;
// let conn;
//  const connectDB=async()=>{
//     try {
//         conn=await OracleDB.getConnection({
//             user:"parteek",
//             password:"Parteek2803",
//             connectString:"localhost/XEPDB1",
            
//         });
//         console.log('connected');
//     } catch (error) {
//         console.log(error);
//     }
//  }
//  connectDB();
// const sqlite3 = require('sqlite3').verbose();

// // open database in memory
// let db = new sqlite3.Database(':memory:', (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to the in-memory SQlite database.');
// });

// // close the database connection
// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });