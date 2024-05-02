import React from 'react'

const MovieCard = ({ movie, setMovieID }) => {
    return (
        <>
            <div className='col-md-3 my-2'>
                <div className="card" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setMovieID(movie.id)}>
                    <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "no_poster.png"} className="card-img-top" alt="poster" />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.overview.length > 99 ? movie.overview.substring(0, 100) + "..." : movie.overview}</p>
                        <p className="text-muted">Release Date: {movie.release_date ? movie.release_date : "Not yet announced"}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard