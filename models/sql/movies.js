import sql from "mssql";

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
}
//Crear pelicula
static async create({input}){
}
//Eliminar pelicula
static async delete({id}){
}
static async update({id,input}){
    }

};//Close class