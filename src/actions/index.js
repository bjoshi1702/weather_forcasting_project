import axios from 'axios';

const API_KEY = 'bdb6b0babb8efc99a9f8689708a231e1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	

	//above line make a request to API and will receive promise

	return {
		type: FETCH_WEATHER,
		payload: request //passing promise here
	};
}


// To keep our action types consistent between action creators and reducers

//fetchWeatcher function is an action, who contains request to back end API.