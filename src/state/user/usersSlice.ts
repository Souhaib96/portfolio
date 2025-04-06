import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface UserState {
    email: string;
    password: string;
    }
export interface UsersState {
    users: UserState[];
}

const initialState: UsersState = {
    users: []
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        register: (state, action: PayloadAction<UserState>) => {

            state.users = [...state.users, action.payload];
        },
    },
});

export default usersSlice.reducer;

export const { register } = usersSlice.actions;