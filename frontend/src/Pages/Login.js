import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { loginUser } from "../Utils/authAPI";
import { useNavigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState(''); /* On déclare deux variable "username" et "password" avec des valeurs initiales vide */
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event) => { /* Màj du state username avec la valeur de l'input */
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => { /* On met à jour le state password avec la valeur de l'input */
        setPassword(event.target.value);
    }

    const handleloginUser = (event) => { /* On déclare une fonction handleloginUser qui sera appelée lors de la soumission du formulaire */
        event.preventDefault();
        loginUser(username, password).then(() => { /* Redirection du user vers la page de profil */
        navigate("/profile");
        });
    }

    return (
        <>
            <Navbar />
            <main class="main bg-dark">
                <section class="sign-in-content">
                    <i class="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div class="input-wrapper">
                            <label for="username">Username</label>
                            <input type="text" id="username" value={username} onChange={handleUsernameChange}/>
                        </div>
                        <div class="input-wrapper">
                            <label for="password">Password</label>
                            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                        </div>
                        <div class="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>
                        <button onClick={handleloginUser} class="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Login;
