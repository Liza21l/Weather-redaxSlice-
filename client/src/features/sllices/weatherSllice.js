import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { getWeather } from "../../api/weather"

const initialState = {
    isOpenWeather: false,
    location: {},
    current: {}
}

export const setWeather = createAsyncThunk(
    "weather/set",
    async (city) => {
        const data = getWeather(city)
        return data
    }
)

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    extraReducers: builder => {
        builder.addCase(setWeather.fulfilled, (state, action) => {
            state.isOpenWeather = true
            state.location = {...action.payload.location}
            state.current = {...action.payload.current}
        })
    }
})

export default weatherSlice.reducer