export type Weather = {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    sunrise: number;
    sunset: number;
  };
  name: string;
};

export type Forecast = {
  list: [
    {
      main: {
        temp: number;
        feels_like: number;
      };
      weather: [
        {
          main: string;
          icon: string;
        },
      ];
      dt_txt: string;
    },
  ];
};
