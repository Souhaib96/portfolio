import {configureStore} from '@reduxjs/toolkit';
import loginSlice from './login/loginSlice';
import usersSlice from './user/usersSlice';
import testimonialSlice from './testimonies/testimoniesSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const loginConfig = {
    key: 'login',
    storage: storage
};

const usersConfig = {
    key: 'users',
    storage: storage
};

const testimonialsConfig = {
    key: 'testimonials',
    storage: storage
};

export const store = configureStore({
    reducer: {
        login: persistReducer(loginConfig,loginSlice),
        users: persistReducer(usersConfig,usersSlice),
        testimonials: persistReducer(testimonialsConfig,testimonialSlice),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;