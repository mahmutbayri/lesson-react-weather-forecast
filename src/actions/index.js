//http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=4505fab19b748345a39d745d61d5c8a6
import axios from 'axios';

const API_KEY = '4505fab19b748345a39d745d61d5c8a6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},tr`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request,
    }
}
