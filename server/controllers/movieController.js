// const Movie = require("../models/Movie");


const { TMDB_BASE_URL, apiKey } = process.env;

//get all movies
const getAllMovies = async (req, res) => {
  try {
      const req = await res.get(
          `${TMDB_BASE_URL}trending/${req.params.type}/day?api_key=${apiKey}`
      );
      res.status(200).json(request.data);
  } catch (error) {
      res.status(500).json(error);
  }
}
// const getMovies = async (req, res, next) => {
//     const movies = await Movie.find({})
//     res.status(200).json(movies)
// }

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

//create a new movie listing
const createMovie  = async (req, res, next) => {
    const { title } = req.body;
    try {
      const movie = await Movie.create({ title });
      res.status(200).json(movie);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //delete a movie
  const deleteMovie = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Not found!" });
    }
  
    const movie = await Movie.findOneAndDelete({ _id: id });
  
    if (!movie) {
      return res.status(404).json({ error: "Not found!" });
    }
  
    res.status(200).json({ movie });
  };

  module.exports = {
    getAllMovies,
    getMovie,
    createMovie,
    deleteMovie
  };