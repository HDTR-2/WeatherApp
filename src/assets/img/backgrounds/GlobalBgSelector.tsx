import React from 'react';
import { Weather } from '../../../redux/Types/Types';
import imgNight from './bg-night.jpg';
import imgSunrise from './bg-sunrise.jpg';
import imgDay from './bg-midday.jpg';
import imgSunset from './bg-sunset.jpg';

type Props = {
  weather: Weather;
};

export const GlobalBgSelector = ({ weather }: Props) => {
  const dateTime = new Date(weather.dt * 1000);
  const hour = dateTime.getHours();
  let backgroundImage = '';
  if (hour >= 18 && hour <= 5) {
    backgroundImage = imgNight;
  } else if (hour >= 5 && hour <= 9) {
    backgroundImage = imgSunrise;
  } else if (hour >= 9 && hour <= 15) {
    backgroundImage = imgDay;
  } else if (hour >= 15 && hour <= 19) {
    backgroundImage = imgSunset;
  }

  document.body.style.backgroundImage = `url(${backgroundImage})`;
  document.body.style.backgroundRepeat = `no-repeat`;
  document.body.style.backgroundSize = `cover`;
  return null;
};
