import { configureStore, combineReducers } from '@reduxjs/toolkit';

import CurrentWeatherSliceReducer from './Slices/CurrentWeatherSlices';
import CurrentWeatherForecastSlicesReducer from './Slices/CurrentWeatherForecastSlices';

const rootReducer = combineReducers({
  CurrentWeatherSliceReducer,
  CurrentWeatherForecastSlicesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
