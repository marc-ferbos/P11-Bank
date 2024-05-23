import {login} from './authReducer';
import store from './store';

export const loginUser = async (username, password) => {

    try { 
        const result = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: username,
                password: password,
            }),
        });
        if (result.ok) {
            const data = await result.json();
            
            store.dispatch(login({token: data.body.token}));
        } else {
            return Promise.reject("Une erreur est survenue");
        }
    } catch (error) {
        console.error(error);
        return Promise.reject("Une erreur est survenue");
    }
};

export const profileUser = async (token) => {
    console.log(token);

    try { 
        const result = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        if (result.ok) {
            const data = await result.json();
            console.log(data);
            store.dispatch(login({token: data.body.token}));
        } else {
            return Promise.reject("Une erreur est survenue");
        }
    } catch (error) {
        console.error(error);
        return Promise.reject("Une erreur est survenue");
    }
};