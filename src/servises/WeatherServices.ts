import axios, { AxiosResponse } from 'axios';
import { Forecast, Weather } from '../redux/Types/Types';
import { apiWeather, apiForecast } from '../axios';

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return apiWeather.get<Weather>(`weather?q=${city}`);
  }
}
export class WeatherServiceForecast {
  static getCurrentWeatherForecast(city: string): Promise<AxiosResponse<Forecast>> {
    return apiForecast.get<Forecast>(`forecast?q=${city}`);
  }
}
