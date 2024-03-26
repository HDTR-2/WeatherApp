import React from 'react';
import style from '../WeatherToday.module.scss';

import img from '../../../../assets/img/icons/cloud.svg';
import { ItemWeather } from '../WeatherToday';

interface Props {
  item: ItemWeather;
}

export const Today = ({ item }: Props) => {
  const { date, icon, temp, feels_like } = item;
  return (
    <>
      <h3>{date}</h3>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <p>{temp}</p>
      <div className={style.fellsLike}>
        <p>Feels like: {feels_like}</p>
      </div>
    </>
  );
};
