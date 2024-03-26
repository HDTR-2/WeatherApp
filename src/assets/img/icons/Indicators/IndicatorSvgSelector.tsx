import React from 'react';
import { GiSunrise, GiSunset } from 'react-icons/gi';
import { FaWind } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { IoMdCloudy } from 'react-icons/io';
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from 'react-icons/fa6';

interface Props {
  id: string;
}

export const IndicatorSvgSelector = ({ id }: Props) => {
  switch (id) {
    case 'FaTemperatureArrowUp':
      return <FaTemperatureArrowUp />;

    case 'FaTemperatureArrowDown':
      return <FaTemperatureArrowDown />;

    case 'GiSunrise':
      return <GiSunrise />;

    case 'GiSunset':
      return <GiSunset />;

    case 'IoMdCloudy':
      return <IoMdCloudy />;

    case 'FaWind':
      return <FaWind />;

    case 'WiHumidity':
      return <WiHumidity />;

    default:
      return null;
  }
};
