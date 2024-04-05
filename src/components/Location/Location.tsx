import React, { useState } from 'react';
import style from './Location.module.scss';
import { FaSearch } from 'react-icons/fa';

type Props = {
  searchCity: string;
  setSearchCityCallback: (city: string) => void;
};

export const Location = ({ searchCity, setSearchCityCallback }: Props) => {
  const [inputValue, setInputValue] = useState(searchCity);
  const handleSearch = () => {
    setSearchCityCallback(inputValue);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <div className={style.changeCity}>
        <input type="text" placeholder="Moscow" value={inputValue} onChange={handleInputChange} />
        <span onClick={handleSearch}>
          <FaSearch />
        </span>
      </div>
    </>
  );
};
