import React, { useEffect, useState } from 'react'

const MovieDetail = ({ movieID }) => {
    const [movieDetails, setMovieDetails] = useState("")

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=d6cca4afbf34de24987bdd2239bcb8c9`)
            const parsedData = await response.json()
            setMovieDetails(parsedData)
        }
        fetchMovieDetails()
    }, [movieID])

    return (
        movieDetails && <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">{movieDetails.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p><b>Adult:</b> {movieDetails.adult ? "Yes" : "No"}</p>
                        <p><b>Budget:</b> {movieDetails.budget / 10000000} Cr</p>
                        <p><b>Genres:</b> {movieDetails.genres?.map(genre => genre.name).join(", ")}</p>
                        <p><b>Movie ID:</b> {movieDetails.id}</p>
                        <p><b>Original Language:</b> {movieDetails.original_language}</p>
                        <p><b>Overview:</b> {movieDetails.overview}</p>
                        <p><b>Production Companies:</b> {movieDetails.production_companies?.map(company => company.name).join(", ")}</p>
                        <p><b>Production Countries:</b> {movieDetails.production_countries?.map(country => country.name).join(", ")}</p>
                        <p><b>Release Date:</b> {movieDetails.release_date}</p>
                        <p><b>Runtine:</b> {movieDetails.runtime} min</p>
                        <p><b>Languages:</b> {movieDetails.spoken_languages?.map(language => language.name).join(", ")}</p>
                        <p><b>Status:</b> {movieDetails.status}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail