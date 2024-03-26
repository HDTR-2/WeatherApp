import { WeatherServiceForecast } from '../../servises/WeatherServices';
import { CurrentWeatherForecastSlices } from '../Slices/CurrentWeatherForecastSlices';
import { AppDispatch } from '../redux-store';

export const fetchCurrentWeatherForecast = (payload: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(CurrentWeatherForecastSlices.actions.fetchCurrentWeatherForecast());
    const res = await WeatherServiceForecast.getCurrentWeatherForecast(payload);
    if (res.status === 200) {
      dispatch(CurrentWeatherForecastSlices.actions.fetchCurrentWeatherForecastSuccess(res));
    } else {
      dispatch(CurrentWeatherForecastSlices.actions.fetchCurrentWeatherForecastError(res));
    }
  } catch (error) {
    alert(error);
  }
};
