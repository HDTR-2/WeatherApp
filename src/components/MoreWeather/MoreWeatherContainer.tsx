import React, { useEffect } from 'react';
import { MoreWeather } from './MoreWeather';
import style from './MoreWeather.module.scss';

import { useCustomDispathc, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeatherForecast } from '../../redux/Thunk/fetchCurrentWeatherForecast';
import { Forecast } from '../../redux/Types/Types';

type Props = {
  forecast: Forecast;
};

export const MoreWeatherContainer = ({ forecast }: Props) => {
  return (
    <div className={style.wrapper}>
      <MoreWeather forecast={forecast} />
    </div>
  );
};
