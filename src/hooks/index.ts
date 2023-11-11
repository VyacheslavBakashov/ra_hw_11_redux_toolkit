import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatchTypes, RootStateTypes } from '../redux/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatchTypes>();
export const useAppSelector: TypedUseSelectorHook<RootStateTypes> = useSelector;