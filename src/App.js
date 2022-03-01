/*import { useEffect, useState } from "react";

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

  const generateMovieHandler = () => {
    fetchTopAnime(randomNumber10())
  }

  return (
    <div>
      <p>{movie.mal_id}</p>
      <img src={movie.image_url} alt={movie.title} />
      <p>{movie.trailer_url}</p>
      <p>{movie.title}</p>
      <p>{movie.episodes}</p>
      <p>{randomNumber10()}</p>
      <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10" onClick={generateMovieHandler}>Random</button>
    </div>
  );
}

export default App;*/

import { useEffect, useRef, useState } from "react";
import useFetch from "./hooks/useFetch";


function App() {
  const moviesIds = [39486, 28851, 37987, 15335, 32281, 31758, 199, 33050, 40456, 36862, 164, 3786, 431, 38329, 7311, 28957, 12355, 31757, 4565, 36098, 33049, 4282, 32, 7472, 48561, 437, 40787, 578, 38040, 36999, 36885, 11577, 11981, 21899, 36538, 35851, 5205, 39741, 5, 9260, 11979, 572, 40664, 9617, 37515, 38826, 3784, 10408, 30346, 1365, 6675, 2418, 759, 28805, 43, 513, 36990, 40853, 523, 40211, 31812, 1033, 37055, 33674, 38234, 585, 5460, 36371, 15227, 11977, 512, 16664, 34537, 12115, 372, 25537, 18617, 35677, 39166, 32005, 38088, 28675, 12859, 4921, 4107, 47, 40421, 1430, 2236, 35111, 37514, 10153, 35608, 4155, 40080, 1364, 6467, 36946, 42894, 29831, 3016, 36370, 16662, 41497, 35110, 21469, 21419, 31658, 1367, 38081, 21557, 1506, 1943, 5681, 5365, 39565, 3783, 781, 1363, 10534, 41361, 9204, 34376, 9963, 2759, 14807, 7465, 31149, 35848, 42916, 34440, 41781, 30364, 4672, 5029, 12477, 36369, 2154, 29755, 7222, 1089, 34100, 33970, 416, 4106, 793, 21647, 40615, 1096, 16782, 24997, 33221, 31490, 34437, 34944, 14353, 2890, 3014, 7711, 34438, 4985, 20371, 543, 37765, 12113, 780, 187, 18429, 15039, 30415, 28725, 38201, 14175, 4280, 34021, 24921, 2761, 779, 2623, 34504, 33190, 1921, 41674, 9465, 35798, 38770, 40082, 30952, 40858, 15771, 34375, 9724, 23293, 10029, 1366, 3782, 14349, 5310, 20815, 2273, 23777, 29830, 2450, 1505, 4447, 468, 451, 9252, 8142, 33280, 875, 28881, 40814, 36702, 16870, 12017, 1824, 35082, 570, 2397, 32871, 19613, 11001, 2753, 35678, 1379, 19489, 35198, 1092, 29829, 597, 23249, 317, 39014, 8514, 39764, 10090, 37442, 1462, 464, 21339, 38850, 10218, 25015, 1211, 12117, 28479, 13119, 44807, 37804, 39619, 40429, 531, 3603, 34544, 42091, 2313, 23775, 42847, 10092, 14735, 38400, 2175, 32870, 997, 19115, 32869, 13667, 34430, 1961, 41780, 450, 16904, 44586, 87, 2499, 34439, 32551, 6772, 2454, 34428, 2594, 41140, 40111, 21473, 528, 9000, 371, 35191, 37306, 6172, 44200, 1689, 3785, 13117, 37501, 40665, 441, 25729, 22583, 37704, 617, 38594, 37027, 11737, 8247, 36896, 42423, 38086, 9288, 6637, 48612, 2593, 10389, 34161, 24543, 38414, 17437, 10717, 37407, 9745, 9751, 6046, 6927, 39585, 9785, 2961, 9790, 31765, 30413, 11531, 28539, 6372, 6624, 35424, 905, 2174, 452, 36286, 46, 2498, 462, 40331, 14407, 10715, 34374, 304, 1240, 40416, 33845, 10715, 34374, 13709, 2665, 31989, 9760, 449, 30778, 6152, 430, 38816, 33034, 33520, 35984, 522, 10500, 37807, 1861, 7651, 10259, 2848, 33519, 2673, 31418, 12917, 10716, 37682, 1034, 9979, 39569, 4835, 19191, 433, 22819, 15197, 33378, 2202, 3848, 37441, 2392, 5204, 30868, 38740, 40024, 39175, 32108, 5291, 7877, 39921, 814, 33302, 28771, 10731, 40044, 1773, 32900, 2171, 25687, 17187, 27411, 8100, 10589, 31, 34136, 40314, 11743, 10714, 1029, 1911, 1924, 1681, 37516, 37348, 19195, 17947, 33183, 1686, 2889, 28755, 16528, 37305, 33082, 8246, 792, 1006, 12015, 30790, 24919, 35086, 32071, 12053, 15925, 5290, 2098, 34792, 14669, 3744, 42106, 33248, 31485, 1474, 5096, 14837, 15813, 41590, 1815, 8098, 33672, 12049, 6922, 10999, 6408, 8888, 1010, 2013, 19021, 40881, 35645, 25755, 8369, 17269, 24655, 1825, 5998, 19193, 10624, 1091, 41168, 21031, 1764, 815, 37986, 38313, 10713, 4970, 33513, 1475, 1476, 17121, 13335, 1419, 520, 2969, 1521, 1078, 906, 484, 6325, 2107, 1117
  ]

  const [movieId, setMovieId] = useState(39486)
  const { data, loading, error, refetch } = useFetch(`https://api.jikan.moe/v3/anime/${movieId}`)

  const randomMovieId = (moviesIds) => {
    return moviesIds[Math.floor(Math.random() * moviesIds.length)]
  }

  const generateRandomMovieHandler = () => {
    const randomId = randomMovieId(moviesIds)
    setMovieId(randomId)
    refetch()
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && data?.title}
      <img src={data?.image_url} alt="" />
      <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10" onClick={generateRandomMovieHandler}>Random</button>
    </div >
  );
}

export default App;

