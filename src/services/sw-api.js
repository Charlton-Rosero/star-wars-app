import axios from "axios";

const CLIENT_URL = 'https://swapi.dev/api/starships/'


export const fetchData = async () =>{
    try {
        const response = await axios.get(CLIENT_URL)
        const data = response.data.results
        return data
    } catch (error) {
        console.log(error)
    }
}