import React from 'react';
import { Item } from './WeatherDetails';
import style from './WeatherDetails.module.scss';
import { IndicatorSvgSelector } from '../../../assets/img/icons/Indicators/IndicatorSvgSelector';

type Props = {
  item: Item;
};

export const WeatherDetailsItem = ({ item }: Props) => {
  const { icon, name, value } = item;
  return (
    <div className={style.detailsItem}>
      <div className={style.item}>
        <IndicatorSvgSelector id={icon} />
      </div>
      <div className={style.item}>{name}</div>
      <div className={style.item}>{value}</div>
    </div>
  );
};
