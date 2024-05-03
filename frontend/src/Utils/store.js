import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { dispatch } from "react-redux"
import { Login, Logout } from "./authActions";

const store = configureStore ({
    reducer: {
        auth: authReducer,
    },
});

export default store;

export const loginUser = async (username, password) => {
    const result = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
    });
    if (result.ok) {
        const data = await result.json();
        dispatch(Login(username, data.token));
    } else {
        dispatch(Logout());
    }
};