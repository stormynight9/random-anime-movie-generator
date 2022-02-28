import { useEffect, useState } from "react";

const randomNumber10 = () => Math.floor(Math.random() * 10 + 1)
const randomNumber50 = () => Math.floor(Math.random() * 50)

function App() {

  const [movie, setMovie] = useState('yo')

  const fetchTopAnime = (randomNumber) => {
    fetch(`https://api.jikan.moe/v3/top/anime/${randomNumber}/movie`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const rng50 = randomNumber50()
        const animeId = data.top[rng50].mal_id
        console.log(animeId)
        fetchRandomAnime(animeId)
      });
  }

  const fetchRandomAnime = (animeId) => {
    fetch(`https://api.jikan.moe/v3/anime/${animeId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setMovie(data)
      });
  }

  useEffect(() => {
    fetchTopAnime(randomNumber10())
  }, [])




  return (
    <div>
      <p>{movie.mal_id}</p>
      <img src={movie.image_url} alt={movie.title} />
      <p>{movie.trailer_url}</p>
      <p>{movie.title}</p>
      <p>{movie.episodes}</p>
      <p>{randomNumber10()}</p>
      <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Random</button>
    </div>
  );
}

export default App;
