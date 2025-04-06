import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface LoginState {
    email: string;
    isLoggedIn: boolean;
    }

const initialState: LoginState = {
    email: '',
    isLoggedIn: false,
    };
    

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginState>) => {

            state.email = action.payload.email;
            state.isLoggedIn = true;
        },
        logout: (state) => {

            state.email = '';
            state.isLoggedIn = false;
        },
    },
});

export default loginSlice.reducer;

export const { login, logout } = loginSlice.actions;