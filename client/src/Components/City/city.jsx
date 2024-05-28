import { useSelector} from "react-redux"
import s from "./city.module.scss"
const City = () => {
    const location = useSelector((state) => state.weather.location)
    const current = useSelector((state) => state.weather.current)

    return (
        <div className={s.card}>
            <div className={s.card_title}>
                <p className={s.card_name}>{location.name}</p>
            </div>
            <p className={s.card_country}>Country: {location.country}</p>
            <p className={s.card_temp}>Temp: {current.temp_c}℃</p>
            <button className={s.card_btn}>Go back</button>
        </div>
    )
}

export default City