import './App.css';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  const [heading, setHeading] = useState("")

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=d6cca4afbf34de24987bdd2239bcb8c9")
      const parsedData = await response.json()
      setHeading("Showing movies now playing in theaters")
      setMovies(parsedData.results)
    }
    fetchNowPlaying()
  }, [])

  const handleSearchMovie = async (e) => {
    e.preventDefault()
    if (!search) {
      return
    }
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d6cca4afbf34de24987bdd2239bcb8c9&query=${search}`)
    const parsedData = await response.json()
    setHeading(`Showing results for "${search}"`)
    setMovies(parsedData.results)
    setSearch("")
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <form role="search" onSubmit={handleSearchMovie}>
          <input onChange={(e) => setSearch(e.target.value)} value={search} className="form-control my-2" type="search" placeholder="Search for any movie..." aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <h3 className='text-center my-2'>{heading}</h3>
        {movies.length > 0 ? <MovieList movies={movies} /> : <p className='text-center'>No movie found</p>}
      </div>
    </>
  );
}

export default App;
