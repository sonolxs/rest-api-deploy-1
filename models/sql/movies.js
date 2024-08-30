import sql from "mssql";
import { randomUUID } from "node:crypto"
//create connection conig to MSSQL
const config = {
    server: 'localhost',
    database: 'dbmov',
    user: 'sas',
    password: '123456',
    // port: 1434,
    options: {
        trustServerCertificate:  true
      }
};
    const conn = await sql.connect(config);
  
export class MovieModel {
    //////OBtener todas las peliculas o por genero 
static async getAll ({genre}){
  try {
      const result = await conn.query(`select * from movies`)
      return result.recordsets;

  } catch (error) {
    console.error(error)
  }
}
//Obtener peliculas solo por ID
static async getById({id}){
  try {
    const result = await conn.query(`select * from movies where id = '${id}'`)
    return result.recordsets;

} catch (error) {
  console.error(error)
}
}
//Crear pelicula
static async create({input}){
  const newID = randomUUID();
  console.log(newID)
  const result = await conn.query(`INSERT INTO movies (id, title, year,director,duration,poster,rate)
VALUES ('${newID}', '${input.title}' , '${input.year}', '${input.director}','${input.duration}','${input.poster}','${input.rate}')`)
console.log(result)
return result;
}
//Eliminar pelicula
static async delete({id}){
}
static async update({id,input}){
    }

};//Close class