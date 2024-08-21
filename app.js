const express = require("express");
 

const app = express();
const port = process.env.PORT ?? 1234;
const movies = require("./movies.json");
const { json } = require("body-parser");

app.use(express.json());
/////////////////////////POR GENERO
app.get("/movies",(req,res)=>{
    const {genre} = req.query;
    if (genre) {
        const movie = movies.filter((movie)=>
        movie.genre.some((gen)=>gen.toLowerCase() == genre.toLowerCase()))
        if (movie.length > 1) {
            return res.json(movie);
        }
    }
    res.json(movies);
})

app.listen(port,()=>{
    console.log(`Ejecutando en http://localhost:${port}/movies`)
})