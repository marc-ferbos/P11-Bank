import {login} from './authActions';
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
        console.log(result);
        if (result.ok) {
            const data = await result.json();
            store.dispatch(login({username: data.username, token: data.token}));
        } else {
            return Promise.reject("Une erreur est survenue");
        }
    } catch (error) {
        console.error(error);
        return Promise.reject("Une erreur est survenue");
    }
}