import { configureStore } from "@reduxjs/toolkit";
import weatherSllice from "./sllices/weatherSllice";


const store = configureStore(
    {
        reducer: { 
            weather: weatherSllice
        }
    }
)

export default store