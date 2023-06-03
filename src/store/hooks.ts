import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { appReducerDispatch, appReducerRootState } from './store';

export const useAppDispatch = () => useDispatch<appReducerDispatch>();
export const useAppSelector: TypedUseSelectorHook<appReducerRootState> = useSelector;