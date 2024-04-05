import React from 'react';
import style from './WeatherToday.module.scss';
import { Today } from './Today/Today';
import { Weather } from '../../../redux/Types/Types';

type Props = {
  weather: Weather;
};

export interface ItemWeather {
  date: string;
  icon: string;
  temp: string;
  feels_like: string;
}

export const WeatherToday = ({ weather }: Props) => {
  const items = [
    {
      date: 'Now',
      icon: `${weather.weather[0].icon}`,
      temp: `${Math.floor(weather.main.temp)}°C`,
      feels_like: `${Math.floor(weather.main.feels_like)}°`,
    },
  ];
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.weatherDetails}>
          <p>{weather.weather[0].description}</p>
        </div>
        <div className={style.weatherToday}>
          {items.map((item: ItemWeather) => (
            <Today key={item.icon} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
