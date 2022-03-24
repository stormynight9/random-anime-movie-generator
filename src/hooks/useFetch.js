import axios from 'axios'
import { useEffect, useState } from 'react'

const endpoint = "https://graphql.anilist.co";
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

let query = `
query ($id: Int) {
    Media (id: $id, type: ANIME) {
        id
        title {
            romaji
            english
            native
            }
        coverImage {
            extraLarge
            color
        }
        bannerImage
        averageScore
        meanScore
        description(asHtml: false)
        startDate {
            year
            month
            day
        }
        duration
        trailer {
            id
            thumbnail
        }
        genres
        studios {
            nodes {
                name
            }
        }
        trailer {
            id
            site
            thumbnail
        }
        rankings {
            rank
        }
        

    }
}
`



const useFetch = (id, setLoadingScreen) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)
            const response = await axios.post(endpoint, {
                query: query,
                variables: {
                    id: id
                }
            },
                { headers: headers })
            setData(response.data)
            setLoading(false)
            setLoadingScreen(false)
        }
        fetchData()
    }, [id])


    return { data, loading }
}

export default useFetch