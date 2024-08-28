
import { readJSON } from "../../utils.js"
import { randomUUID } from "node:crypto"

const movies = readJSON('./movies.json');
// import movies from '../movies.json' with {type:'json'};

export class MovieModel {
    //////OBtener todas las peliculas
static async getAll ({genre}){  
     if ({genre}) {
        const filteredMovies = movies.filter(
          movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        )
        if (Object.keys(filteredMovies).length){  
          console.log(genre)
          console.log(Object.keys(filteredMovies).length)
          console.log(typeof(filteredMovies))
          return filteredMovies }
        }
            console.log(typeof(movies))
             return movies;
}
//Obtener peliculas solo por ID
static async getById({id}){
  console.log("Entra a metodo")
    const movie = movies.find(movie => movie.id === id)
    if (movie) return movie;

}
//Crear pelicula
static async create({input}){
    
    const newMovie = {
        id: randomUUID(), // uuid v4
        ...input
      }
    
      // Esto no sería REST, ya que estamos guardando el estado de la aplicación en memoria
      movies.push(newMovie)
      return newMovie;
}
//Eliminar pelicula
static async delete({id}){
    const movieIndex = movies.findIndex(movie => movie.id === id)
    if (movieIndex === -1) {
      return false
    }
    movies.splice(movieIndex, 1)
   return true
}
static async update({id,input}){

    const movieIndex = movies.findIndex(movie => movie.id === id)
  
    if (movieIndex === -1) {
      return false;
    }
    movies[movieIndex] = {
      ...movies[movieIndex],
      ...input}
        return movies[movieIndex];
    }

};//Close class