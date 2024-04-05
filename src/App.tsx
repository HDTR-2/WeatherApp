import React, { useEffect, useState } from 'react';
import './styles/normolize.scss';
import { Route, Routes } from 'react-router-dom';

import ThisDay from './components/ThisDay/ThisDay';
import { MainContainer } from './components/Main/MainContainer';

import style from './styles/App.module.scss';
import { useCustomDispathc, useCustomSelector } from './hooks/store';
import { MoreWeatherContainer } from './components/MoreWeather/MoreWeatherContainer';
import { fetchCurrentWeather } from './redux/Thunk/fetchCurrentWeather';
import { fetchCurrentWeatherForecast } from './redux/Thunk/fetchCurrentWeatherForecast';
import { Location } from './components/Location/Location';
import { GlobalBgSelector } from './assets/img/backgrounds/GlobalBgSelector';

function App() {
  const [searchCity, setSearchCity] = useState<string>('Moscow');

  const handleSearchCityChange = (newSearchCity: string) => {
    setSearchCity(newSearchCity);
  };
  const dispatch = useCustomDispathc();

  useEffect(() => {
    dispatch(fetchCurrentWeather(searchCity));
    dispatch(fetchCurrentWeatherForecast(searchCity));
  }, [searchCity]);
  const { weather, forecast } = useCustomSelector((state) => ({
    weather: state.CurrentWeatherSliceReducer.weather,
    forecast: state.CurrentWeatherForecastSlicesReducer.forecast,
  }));
  return (
    <div className={style.App}>
      <GlobalBgSelector weather={weather} />
      <div className={style.appWrapper}>
        <ThisDay weather={weather} />
        <Location setSearchCityCallback={handleSearchCityChange} searchCity={searchCity} />
        <Routes>
          <Route path="/*" element={<MainContainer weather={weather} />} />
        </Routes>
        <MoreWeatherContainer forecast={forecast} />
      </div>
    </div>
  );
}

export default App;
