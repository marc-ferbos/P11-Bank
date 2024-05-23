import { configureStore } from "@reduxjs/toolkit";
import reducer from "./authReducer";


const store = configureStore ({
    reducer: {
        auth: reducer,
    },
});

export default store;