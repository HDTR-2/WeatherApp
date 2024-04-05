import axios from 'axios';

export const apiWeather = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
export const apiForecast = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiWeather.interceptors.request.use((config) => {
  config.url = config.url + '&units=metric' + '&appid=' + process.env.REACT_APP_API_KEY;
  return config;
});
apiForecast.interceptors.request.use((config) => {
  config.url = config.url + '&cnt=8' + '&units=metric' + '&appid=' + process.env.REACT_APP_API_KEY;
  return config;
});

//`https://api.openweathermap.org/data/2.5/forecast?q=Москва&cnt=7&appid=bbff611a159aac22b4e08e8cb050e507&units=metric`;
