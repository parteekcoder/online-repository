const OracleDB = require('oracledb')
const oracle=require('oracledb')

 OracleDB.outFormat=OracleDB.OUT_FORMAT_OBJECT;
let conn;
 const connectDB=async()=>{
    try {
        conn=await OracleDB.getConnection({
            user:"parteek",
            password:"Parteek2803",
            connectString:"localhost/XEPDB1",
            conn
        });
        console.log('connected');
    } catch (error) {
        console.log(error);
    }
 }
 connectDB();