
import  router  from "express";
import { MovieController } from "../controllers/movies.js";

// const movies = readJSON('../movies.json');
// import movies from '../movies.json' with {type:'json'};
export const moviesRouter = router();

//*****Buscar todas las pelicuaso por genero  */
moviesRouter.get("/", MovieController.getAll)

//********************Filtrar por ID
moviesRouter.get('/:id', MovieController.getById)

//********************Crear pelicula */
moviesRouter.post('/', MovieController.create)

//***********************Eliminar pelicula */
moviesRouter.delete('/:id', MovieController.delete)

//************************Modificar pelicula */
moviesRouter.patch('/:id', MovieController.update)
  