const { z } = require("zod");



const schemaMovie= z.object({
    title:z.string(),
    year:z.number().min(1990).max(2024),
    director:z.string(),
    duration:z.number().min(10),
    poster:z.string().url(),
    genre:z.array(z.enum(["Action", "Drama", "crime","Adventure",
        "Sci-Fi","Romance","animation","Biography","Fantasy"])),
    rate:z.number().int().min(0).max(10)
});

function validateMovie(movie){
    return schemaMovie.safeParse(movie);
};
function validatePartialMovie(movie){
    return schemaMovie.partial().safeParse(movie);
};

module.exports= {validateMovie,validatePartialMovie};