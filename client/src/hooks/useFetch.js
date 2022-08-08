import { useEffect, useState } from "react"
import  axios  from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)


    useEffect(()=> { 
        const fetchData = async () => {
            

            try {
                const res = await axios.get(url)
                setData(res.data)
            } catch (error) {
                setError(error)
            }
        };
        fetchData()
    }, [url])

    return {data, error}
} 

export default useFetch