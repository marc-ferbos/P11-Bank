const initialState = {
    isAuthenticated: false,
    username: '',
    token: '',
};

const authReducer = (state = initialState, action) => {
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

export default authReducer;
