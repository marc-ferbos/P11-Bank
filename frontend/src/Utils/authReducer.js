import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        username: '',
        token: '',
        email: '',
        firstName: '',
        lastName: '',
    },
    reducers: {
        login: (state, action) => { console.log(action.payload);
            state.isAuthenticated = true;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = '';
            state.token = '';
        },
        updateUsername: (state, action) => {
            state.username = action.payload;
        },
        stockUser: (state, action) => { /*console.log(action.payload);*/
            state.isAuthenticated = true;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        }
    },
});

export const { login, logout, updateUsername, stockUser } = userSlice.actions;

export default userSlice.reducer;


/*const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                isAuthenticated: true,
                username: action.payload.username,
                token: action.payload.token,
            };
        case "LOGOUT":
            return initialState;
        case "UPDATE_USERNAME":
            return {
                state,
                username: action.payload,
            };
        default:
            return state; 
            };
    }

export default authReducer;*/
