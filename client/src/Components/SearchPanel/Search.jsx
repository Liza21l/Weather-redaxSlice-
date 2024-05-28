import {useDispatch, useSelector} from "react-redux"
import { setWeather } from "../../features/sllices/weatherSllice"
import { useState } from "react"
import s from "./searchPanel.module.scss"

const SearchPanel = () => {
    const dispatch = useDispatch()
    const [city, setSity] = useState("")
    const onChangeCity = (newValue) => {
        setSity(newValue)
        console.log(city)
    }
    const handleGetWeather = (city) => { 
        dispatch(setWeather(city))
    };
    return (
        <div className={s.searchPanel}>
            <input className={s.searchPanel_input} value={city} onChange={(e) => {onChangeCity(e.target.value)}} placeholder="Write city"></input>
            <button className={s.searchPanel_btnSearch} onClick={() => {handleGetWeather(city)}}>
                🔎
            </button>
        </div>
    )
}

export default SearchPanel