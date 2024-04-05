import React from 'react';
import style from './ThisDay.module.scss';
import { Weather } from '../../redux/Types/Types';

type Props = {
  weather: Weather;
};

const options: any = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const ThisDay = ({ weather }: Props) => {
  return (
    <div className={style.thisDay}>
      <div className={style.weatherTemp}>
        <h1>{Math.floor(weather.main.temp)}°</h1>
      </div>
      <div className={style.info}>
        <div>
          <h2>{weather.name}</h2>
          <p>{new Date(weather.dt * 1000).toLocaleDateString('en-En', options)}</p>
          <p>{weather.weather[0].main}</p>
        </div>
      </div>
      <div className={style.icon}></div>
    </div>
  );
};

export default ThisDay;
