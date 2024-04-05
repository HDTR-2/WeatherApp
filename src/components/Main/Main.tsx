import React from 'react';
import { WeatherToday } from './WeatherToday/WeatherToday';

import style from './Main.module.scss';
import { WeatherDetails } from './WeatherDetails/WeatherDetails';
import { Weather } from '../../redux/Types/Types';

type Props = {
  weather: Weather;
};

export const Main = ({ weather }: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.weather}>
        <WeatherToday weather={weather} />
        <WeatherDetails weather={weather} />
      </div>
    </div>
  );
};
