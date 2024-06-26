import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Account from "../Components/Account";
import { useSelector, useDispatch } from "react-redux";
import { updateUsername } from "../Utils/authReducer";
import { useState } from "react";
import { updateProfile } from "../Utils/authAPI";
import store from "../Utils/store";
import { Navigate } from "react-router-dom";

function Profile() {
    const token = useSelector((state) => state.auth.token);
    const username = useSelector((state) => state.auth.username);
    const firstName = useSelector((state) => state.auth.firstName);
    const lastName = useSelector((state) => state.auth.lastName);
    const [newUsername, setNewUsername] = useState(username);

    const [isEditing, setIsEditing] = useState(false);

    if (! token ) {
        return <Navigate to="/login" />;
    }

    
    const editClick = () => {
        setIsEditing(true);
    };

    const cancelClick = () => {
        setIsEditing(false);
        setNewUsername(username);
    };

    const saveClick = async () => {
        try {
            await updateProfile(token, newUsername);
            store.dispatch(updateUsername(newUsername)); /* A Modifier pour mettre à jour le nom d'utilisateur dans le store */
            setIsEditing(false);
        } catch (error) {
            console.error("failed to update newusername", error);
        }
    };

    return (
        <>
            <Navbar />
            <main class="main bg-dark">
                <div class="header">
                    <h1>
                        Welcome back, {username} !
                    </h1>
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                value={newUsername}
                                onChange={(event) =>
                                    setNewUsername(event.target.value)
                                }
                            />
                            <input 
                                type="text"
                                value={firstName}
                                disabled
                            />
                            <input 
                                type="text"
                                value={lastName}
                                disabled
                            />
                            
                            <button className="save-button" onClick={saveClick}>
                                Save
                            </button>
                            <button
                                className="cancel-button"
                                onClick={cancelClick}
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button class="edit-button" onClick={editClick}>
                            Edit Name
                        </button>
                    )}
                </div>
                <h2 class="sr-only">Accounts</h2>
                <Account
                    title="Argent Bank Checking (x8349)"
                    amount="2,082.79"
                />
                <Account
                    title="Argent Bank Savings (x6712)"
                    amount="10,928.42"
                />
                <Account
                    title="Argent Bank Credit Card (x8349)"
                    amount="184.30"
                />
            </main>
            <Footer />
        </>
    );
}

export default Profile;
