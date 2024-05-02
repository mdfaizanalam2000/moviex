import React, { useState } from 'react'
import MovieCard from './MovieCard'
import MovieDetail from './MovieDetail'

const MovieList = ({ movies }) => {
    const [movieID, setMovieID] = useState("")
    return (
        <>
            <div className='row my-2'>
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} setMovieID={setMovieID} />
                })}
            </div>
            <MovieDetail movieID={movieID} />
        </>
    )
}

export default MovieList