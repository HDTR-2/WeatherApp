import React, { useEffect } from 'react';
import { Main } from './Main';
import { Weather } from '../../redux/Types/Types';

type Props = {
  weather: Weather;
};

export const MainContainer = ({ weather }: Props) => {
  return <Main weather={weather} />;
};
