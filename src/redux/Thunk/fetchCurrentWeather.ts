import { WeatherService } from '../../servises/WeatherServices';
import { CurrentWeatherSlice } from '../Slices/CurrentWeatherSlices';
import { AppDispatch } from '../redux-store';

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(CurrentWeatherSlice.actions.fetchCurrentWeather());
    const res = await WeatherService.getCurrentWeather(payload);
    if (res.status === 200) {
      dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
    } else {
      dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherError(res));
    }
  } catch (error) {
    alert(error);
  }
};
