import React from 'react';
import style from './WeatherDetails.module.scss';
import { WeatherDetailsItem } from './WeatherDetailsItem';
import { Weather } from '../../../redux/Types/Types';

interface Props {
  weather: Weather;
}

export interface Item {
  icon: string;
  name: string;
  value: string;
}

export const WeatherDetails = ({ weather }: Props) => {
  let sunriseTime = new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  let sunsetTime = new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const items = [
    {
      icon: 'FaTemperatureArrowUp',
      name: 'Max temp',
      value: `${Math.floor(weather.main.temp_max)}°C`,
    },
    {
      icon: 'FaTemperatureArrowDown',
      name: 'Min temp',
      value: `${Math.floor(weather.main.temp_min)}°с`,
    },
    {
      icon: 'GiSunrise',
      name: 'Sunrize ',
      value: `${sunriseTime} (мск)`,
    },
    {
      icon: 'GiSunset',
      name: 'Sunset',
      value: `${sunsetTime} (мск)`,
    },
    {
      icon: 'IoMdCloudy',
      name: 'Clouds',
      value: `${weather.clouds.all}%`,
    },
    {
      icon: 'FaWind',
      name: 'Wind',
      value: `${weather.wind.speed.toFixed(1)} м/с`,
    },
    {
      icon: 'WiHumidity',
      name: 'Humidity',
      value: `${weather.main.humidity}%`,
    },
  ];
  return (
    <div className={style.wrapper}>
      {items.map((item: Item) => (
        <WeatherDetailsItem key={item.icon} item={item} />
      ))}
    </div>
  );
};
