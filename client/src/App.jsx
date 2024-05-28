import {useDispatch, useSelector} from "react-redux"
import { setWeather } from "./features/sllices/weatherSllice"
import { useState } from "react"
import SearchPanel from "./Components/SearchPanel/Search"
import City from "./Components/City/city"

const App = () => { 
    const isOpenWeather = useSelector((state) => state.weather.isOpenWeather)
    return ( 
        <>
            <p>WeatherCity</p>
            {!isOpenWeather && <SearchPanel/>}
            
            {isOpenWeather && (
            <City/>
            )}
            
        </>
    )
}

export default App 