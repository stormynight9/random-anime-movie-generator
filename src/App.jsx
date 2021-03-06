import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";

import useFetch from "./hooks/useFetch";
import { moviesIds } from "./constants";
import Button from "./components/Button";
import Background from "./components/Background";
import CoverImage from "./components/CoverImage";
import Details from "./components/Details";



const randomMovieId = (moviesIds) => {
  return moviesIds[Math.floor(Math.random() * moviesIds.length)]
}


function App() {

  const [movieId, setMovieId] = useState(randomMovieId(moviesIds))
  const [loadingScreen, setLoadingScreen] = useState(true)
  const { data, loading } = useFetch(movieId, setLoadingScreen)
  console.log(data)

  const generateRandomMovieHandler = () => {
    const randomId = randomMovieId(moviesIds)
    setMovieId(randomId)
  }

  const details = {
    titleEnglish: data?.data.Media.title.english,
    titleRomaji: data?.data.Media.title.romaji,
    titleNative: data?.data.Media.title.native,
    coverImage: data?.data.Media.coverImage.extraLarge,
    bannerImage: data?.data.Media.bannerImage,
    score: data?.data.Media.averageScore,
    description: data?.data.Media.description,
    season: data?.data.Media.season,
    year: data?.data.Media.seasonYear,
    // month: data?.data.Media.startDate.month,
    // day: data?.data.Media.startDate.day,
    duration: data?.data.Media.duration,
    genres: data?.data.Media.genres,
    studios: data?.data.Media.studios.nodes,
    color: data?.data.Media.coverImage.color,
    trailerId: data?.data.Media.trailer?.id,
    rank: data?.data.Media.rankings[0]?.rank
  }


  return <>
    {loadingScreen && <div className='h-screen flex justify-center items-center'><HashLoader color={'#4A90E2'} loading={loadingScreen} size={100} /></div>}
    {!loadingScreen && <>
      <main className='mx-2 '>
        <div className='lg:flex sm:space-x-4 items-center'>
          <CoverImage coverImage={details.coverImage} title={details.titleEnglish} />
          <Details details={details} />
        </div>
      </main>
      <Button loading={loading} generateRandomMovie={generateRandomMovieHandler} color={details.color} />
      <Background color={details.color} bannerImage={details.bannerImage} /> </>}
  </>
}

export default App;