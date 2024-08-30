// import { MovieModel } from "../models/local-file-system/movies.js";
import { MovieModel } from "../models/sql/movies.js";
import { validateMovie, validatePartialMovie } from '../schemas/movie.js';

export class MovieController{
static async getAll(req,res) {
    const { genre } = req.query
    const movies = await MovieModel.getAll({genre:genre});
    res.json(movies);
  }//
  static async getById(req,res) {
    const { id } = req.params
    const movie = await MovieModel.getById({id:id});
    if(movie) return res.json(movie);

   res.status(404).json({ message: 'Movie not found' })
}
  static async create(req,res) {
    const result = validateMovie(req.body)
  
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
  
 const newMovie = await MovieModel.create({input:result.data})
  
    res.status(201).json(newMovie)
  }
  static async delete(req,res) {
    const { id } = req.params

    const result  = MovieModel.delete({id});
    if (result === false ) return res.status(404).json({Message:"No se ha encontrado la pelicula solicitada"})

    return res.json({Message:"Se ha eliminado la pelicula"})
}
  static async update(req,res) {
    const result = validatePartialMovie(req.body)
  
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
  
    const { id } = req.params
    const updateMovie = await MovieModel.update({id,input:result.data})
      if (updateMovie === false) { return res.status(404).json({ error: "Pelicula no encontrada" })
      }

    return res.json(updateMovie)
}
}//End class