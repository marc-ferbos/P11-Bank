import { createSlice } from "@reduxjs/toolkit";



export const Login = (username, token) => ({
    type: "LOGIN",
    payload: {username, token},
});

export const Logout = () => ({
    type: "LOGOUT",
});