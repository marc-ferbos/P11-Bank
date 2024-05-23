import { createSlice } from "@reduxjs/toolkit";


export const Login = (username, token) => ({
    type: "LOGIN",
    payload: {username, token},
});

export const Logout = () => ({
    type: "LOGOUT",
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        username: '',
        token: '',
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = '';
            state.token = '';
        },
        updateUsername: (state, action) => {
            state.username = action.payload;
        }
    },
});

export const { login, logout, updateUsername } = userSlice.actions;

export default userSlice.reducer;