import { useState } from "react";
import Card from "./components/Card";
import ReadMore from "./components/ReadMore";
import useFetch from "./hooks/useFetch";


function App() {
  const moviesIds = [21519, 20954, 199, 112151, 106286, 99750, 431, 164, 16782, 1689, 523, 21875, 104157, 100723, 32, 102976, 10408, 12355, 47, 21403, 437, 2236, 578, 108553, 9260, 114963, 7311, 512, 2890, 103047, 21400, 131573, 43, 21399, 11577, 20791, 2759, 16870, 99457, 1943, 5681, 3784, 100643, 21718, 513, 109190, 2593, 20519, 14349, 113596, 20981, 11981, 3785, 99425, 111734, 21220, 20968, 99540, 101302, 6675, 21719, 97880, 572, 3786, 585, 9617, 7711, 16662, 105018, 21096, 98384, 15039, 98762, 108623, 106240, 5, 100878, 12477, 2418, 20555, 97908, 759, 126659, 21377, 107625, 14353, 20963, 20514, 13667, 21296, 124140, 3782, 14837, 101166, 597, 101231, 3783, 13271, 112788, 15227, 4282, 100178, 19489, 16664, 4280, 416, 528, 16904, 11737, 31, 430, 2472, 5205, 8142, 5204, 10029, 9760, 131520, 11977, 1033, 15335, 21684, 6922, 442, 10589, 20778, 11979, 19951, 8246, 433, 100749, 100675, 12859, 20741, 4437, 10218, 97917, 21874, 21191, 12049, 12115, 4565, 4155, 21425, 6325, 12113, 570, 20766, 1117, 936, 103221, 21335, 97918, 105143, 1686, 98656, 20768, 1118, 97669, 9135, 4107, 2144, 1029, 16528, 108577, 187, 7472, 127271, 6372, 2889, 8247, 1119, 11743, 4835, 101102, 901, 905, 14807, 21757, 468, 1829, 101317, 97981, 1462, 114129, 19021, 14407, 103631, 898, 1723, 139498, 6637, 101249, 903, 7465, 906, 102649, 119113, 3087, 21008, 97757, 2154, 543, 1120, 1430, 317, 18617, 1526, 101344, 2847, 904, 131680, 899, 101811, 1122, 20802, 902, 101343, 15771, 21158, 896, 9790, 21498, 617, 103276, 522, 104382, 900, 13391, 101992, 897, 98497, 109125, 98779, 113917, 20692, 894, 1030, 20691, 104990, 111852, 4106, 101813, 5365, 14293, 459, 14175, 98885, 99470, 1121, 107203, 14669, 4026, 875, 6178, 974, 2961, 10681, 98884, 895, 372, 464, 101812, 20736, 20965, 17121, 2201, 21496, 107727, 21120, 10686, 111137, 98249, 103277, 128740, 21244, 10389, 3603, 100465, 117074, 371, 12783, 7695, 123899, 136192, 20737, 121034, 133007, 10294, 4672, 104460, 98873, 460, 21404, 4970, 21500, 462, 101574, 405, 116756, 2397, 21248, 731, 116226, 20932, 9000, 1894, 108487, 8100, 100248, 2952, 565, 100965, 21265, 98240, 136149, 452, 732, 21596, 461, 6772, 87458, 98298, 450, 1379, 112930, 20501, 98874, 101595, 6408, 20697, 2594, 17187, 463, 99938, 451, 21813, 441, 98495, 6610, 449, 133845, 100268, 465, 1140, 97734, 779, 20644, 2175, 21729, 16680, 21798, 3014, 20908, 6951, 502, 20919, 1095, 1089, 2107, 3089, 10259, 21771, 1090, 98402, 6288, 102891, 1365, 108981, 21788, 127227, 6624, 1034, 1107, 9917, 3848, 130050, 21683, 415, 9488, 1824, 143080, 781, 780, 87, 1815, 893, 19191, 98496, 100744, 531, 21295, 21266, 891, 100181, 13709, 12671, 97619, 1363, 21140, 393, 1364, 98663, 8514, 2398, 892, 133898, 2006, 2000, 17269, 3016, 10740, 9999, 21042, 9751, 19193, 9252, 107202, 2962, 110413
  ]


  const randomMovieId = (moviesIds) => {
    return moviesIds[Math.floor(Math.random() * moviesIds.length)]
  }

  const [movieId, setMovieId] = useState(randomMovieId(moviesIds))
  const { data, loading } = useFetch(movieId)
  const [isReadMore, setIsReadMore] = useState(true);




  const generateRandomMovieHandler = () => {
    const randomId = randomMovieId(moviesIds)
    setMovieId(randomId)
    setIsReadMore(false);
  }

  let detail = {
    titleEnglish: data?.data.Media.title.english,
    titleRomaji: data?.data.Media.title.romaji,
    titleNative: data?.data.Media.title.native,
    coverImage: data?.data.Media.coverImage.extraLarge,
    score: data?.data.Media.averageScore,
    description: data?.data.Media.description,
    year: data?.data.Media.startDate.year,
    month: data?.data.Media.startDate.month,
    day: data?.data.Media.startDate.day,
    duration: data?.data.Media.duration,
    genres: data?.data.Media.genres,
    studios: data?.data.Media.studios.nodes
  }
  return (
    <>

      <Card detail={detail} />
      <button style={{ background: data?.data.Media.coverImage.color ? data?.data.Media.coverImage.color : 'blue' }} className={`flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[${data?.data.Media.coverImage.color}] hover:bg-indigo-700 md:py-4 md:text-lg md:px-10`} onClick={generateRandomMovieHandler}>Random</button>
    </>
  );
}

export default App;

