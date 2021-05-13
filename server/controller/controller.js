const Movie = require('../modal/movieModal');
const Director = require('../modal/directorSchema');

//Movies Display

exports.MovieList = async (req, res) => {
    try {
        const movie = await Movie.find();
        res.send(movie);
    } catch (err) {
        res.send(err)
    }
}

//Director Display

exports.Directorlist = async (req, res) => {
    try {
        const director = await Director.find();
        res.send(director);
    } catch (err) {

        res.send(err)
    }
}

//Movies Add

exports.addMovies = async (req, res) => {
    try {
        const newMovie = await Movie.create({
            moviename: req.body.moviename,
            id: req.body.id,
            boxofficeCollection : req.body.boxofficeCollection,
            director: req.body.director,
            reting: req.body.rating
        });

        res, json({
            data: {
                movie: newMovie
            }
        })
        res.send(movie);
        res.status(200).json({
            message: 'Successful'
        })
    } catch (err) {
        res.send(err)
    }
}

//Director Add

exports.addDirector = async (req, res) => {
    try {
        const newDirector = await Director.create({
            name: req.body.name,
            age: req.body.age,
            gender : req.body.gender,
            awardCount: req.body.awardCount,
        });

        res, json({
            data: {
                movie: newDirector
            }
        })

        res.send(movie);
        res.status(200).json({
            message: 'Successful'
        })
    } catch (err) {
        res.send(err)
    }
}

exports.deleteMovieByName = async (req, res) => {
    try {
        const movie = await Movie.deleteOne({
            moviename: req.body.moviename
        });
        res.status(200).send(movie);
    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: 'InvalidNameException'
        })
    }
}

exports.searchDirector = async (res, req) => {
    try {
        console.log(req.params.name);
        const director = await Director.find({ name : req.params.name })
        res.send(director)
    }catch (err)
    {
        console.log(err);
    }
}

exports.updateAge = async (res, req) => {
    try {
        let name = req.params.name;
        const dir = await Director.find(name, { age: req.body.age})
        res.status(200).json({
            status: "Updated"
        })
    }catch(err)
    {
        console.log(err);
        res.status(400).send('err')
    }
}

exports.searchMovies = async (res, req) => {
    try {
        let dir = req.params.director;
        const movie = await Movie.find({ director : dir })
        res.send(movie)
    }catch (err)
    {
        console.log(err);
    }
}


