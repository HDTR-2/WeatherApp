import React from 'react';

type Props = {
  iconId: string;
};

const GlobalBgSelector = ({ iconId }: Props) => {
  switch (iconId) {
    case 'weatherBackgound':
      return <div>Weather Background</div>;

    default:
      return null;
  }
};

export default GlobalBgSelector;
