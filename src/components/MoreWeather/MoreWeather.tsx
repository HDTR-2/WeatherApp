import React from 'react';
import style from './MoreWeather.module.scss';
import { Tabs } from './Tabs';
import { Forecast } from '../../redux/Types/Types';

type Props = {
  forecast: Forecast;
};
const options: any = {
  weekday: 'short',
};

export const MoreWeather = ({ forecast }: Props) => {
  const days = [...forecast.list];
  return (
    <div>
      <Tabs />
      <div className={style.forecast}>
        {days.map((item) => (
          <div className={style.forecastDay}>
            <h2>{new Date(item.dt_txt).toLocaleDateString('ru-RU', options)}</h2>
            <p>
              {new Date(item.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
            <h2>{Math.floor(item.main.temp)}°</h2>
            <p>{Math.floor(item.main.feels_like)}°</p>
            <p>{item.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
