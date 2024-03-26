import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../redux/redux-store';

export const useCustomDispathc = () => useDispatch<AppDispatch>();

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
