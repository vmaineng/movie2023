const Movie = require("../models/Movie");

//get all movies
const getMovies = async (req, res, next) => {
    const movies = await Movie.find({})
    res.status(200).json(movies)
}

//get a single movie
const getMovie = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Not found!" });
      }
    
      const movie = await Movie.findById(id);
      if (!movie) {
        return res.status(404).json({ error: "Not Found" });
      }
    
      res.status(200).json(movie);
}