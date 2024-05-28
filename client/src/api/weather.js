import axios from "axios"

const apiKey = `191d9f54d54842afb5e113242231105`
const url = `http://api.weatherapi.com/v1/current.json`

export const getWeather = async (city) => {
    const { data } = await axios.get(`${url}?key=${apiKey}&q=${city}`)
    return data
}
