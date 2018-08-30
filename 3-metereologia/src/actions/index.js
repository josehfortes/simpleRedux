import axios from 'axios';

const API_KEY = '247278ef00c4680863173390b10e8ca1';
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log("REQUEST ", request)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}