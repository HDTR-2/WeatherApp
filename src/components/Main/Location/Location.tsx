import React from 'react';
import style from './Location.module.scss';
import Select from 'react-select';
import { Weather } from '../../../redux/Types/Types';

const cityName = [{ label: 'Москва' }, { label: 'Санкт-Петербург' }, { label: 'Новгород' }];

type Props = {
  weather: Weather;
};

export const Location = ({ weather }: Props) => {
  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'transperent',
      border: '1px solid white',
      text: 'white',
    }),
  };

  return (
    <>
      <div className={style.changeCity}>
        <Select defaultValue={cityName[0]} styles={colorStyles} options={cityName} />
      </div>
    </>
  );
};
