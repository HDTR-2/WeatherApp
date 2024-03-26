import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Forecast } from '../Types/Types';
import { AxiosResponse } from 'axios';

type CurrentWeatherForecast = {
  forecast: Forecast;
  isLoading: boolean;
  response: Responses;
};

type Responses = {
  status: number;
  message: string;
};

const initialState: CurrentWeatherForecast = {
  forecast: {
    list: [
      {
        main: {
          temp: 0,
          feels_like: 0,
        },
        weather: [
          {
            main: '',
            icon: '',
          },
        ],
        dt_txt: '',
      },
    ],
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
};
export const CurrentWeatherForecastSlices = createSlice({
  name: 'CurrentWeatherForecast',
  initialState,
  reducers: {
    fetchCurrentWeatherForecast(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherForecastSuccess(state, action: PayloadAction<AxiosResponse<Forecast>>) {
      state.forecast = action.payload.data;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWeatherForecastError(state, action: PayloadAction<AxiosResponse<Forecast>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default CurrentWeatherForecastSlices.reducer;
