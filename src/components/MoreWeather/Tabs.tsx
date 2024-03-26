import React from 'react';
import style from './MoreWeather.module.scss';

type Props = {};

export const Tabs = (props: Props) => {
  const tabs = [
    {
      value: 'На неделю',
    },
    {
      value: 'На месяц',
    },
    {
      value: 'На 10 дней',
    },
  ];
  return (
    <div className={style.buttonsControll}>
      {tabs.map((tabs) => (
        <div className={style.buttonControll} key={tabs.value}>
          {tabs.value}
        </div>
      ))}

      <div className={style.buttonControll}>Отмена</div>
    </div>
  );
};
