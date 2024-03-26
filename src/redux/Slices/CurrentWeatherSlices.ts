import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Weather } from '../Types/Types';
import { AxiosResponse } from 'axios';

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  response: Responses;
};

type Responses = {
  status: number;
  message: string;
};

const initialState: CurrentWeather = {
  weather: {
    weather: [
      {
        id: 0,
        main: '',
        description: '',
        icon: '',
      },
    ],
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      humidity: 0,
    },
    wind: {
      speed: 0,
    },
    clouds: {
      all: 0,
    },
    sys: {
      sunrise: 0,
      sunset: 0,
    },
    name: '',
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
};
export const CurrentWeatherSlice = createSlice({
  name: 'CurrentWeather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.weather = action.payload.data;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default CurrentWeatherSlice.reducer;
