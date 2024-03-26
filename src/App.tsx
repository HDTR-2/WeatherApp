import React, { useEffect } from 'react';
import './styles/normolize.scss';
import { Route, Routes } from 'react-router-dom';

import ThisDay from './components/ThisDay/ThisDay';
import { MainContainer } from './components/Main/MainContainer';

import style from './styles/App.module.scss';
import { useCustomDispathc, useCustomSelector } from './hooks/store';
import { MoreWeatherContainer } from './components/MoreWeather/MoreWeatherContainer';
import { fetchCurrentWeather } from './redux/Thunk/fetchCurrentWeather';
import { fetchCurrentWeatherForecast } from './redux/Thunk/fetchCurrentWeatherForecast';

function App() {
  const dispatch = useCustomDispathc();

  useEffect(() => {
    dispatch(fetchCurrentWeather('Moscow'));
    dispatch(fetchCurrentWeatherForecast('Moscow'));
  }, []);

  const { weather, forecast } = useCustomSelector((state) => ({
    weather: state.CurrentWeatherSliceReducer.weather,
    forecast: state.CurrentWeatherForecastSlicesReducer.forecast,
  }));
  return (
    <div className="App">
      <div className={style.appWrapper}>
        <ThisDay weather={weather} />
        <Routes>
          <Route path="/*" element={<MainContainer weather={weather} />} />
        </Routes>
        <MoreWeatherContainer forecast={forecast} />
      </div>
    </div>
  );
}

export default App;
