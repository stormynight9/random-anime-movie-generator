import { useEffect, useState } from "react";

function App() {

  const [movie, setMovie] = useState('yo')


  useEffect(() => {

    fetch('https://api.jikan.moe/v3/anime/1')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setMovie(data)
      });
  }, [])

  return (
    <div>
      <p>{movie.mal_id}</p>
      <img src={movie.image_url} alt={movie.title} />
      <p>{movie.trailer_url}</p>
      <p>{movie.title}</p>
      <p>{movie.episodes}</p>
    </div>
  );
}

export default App;
