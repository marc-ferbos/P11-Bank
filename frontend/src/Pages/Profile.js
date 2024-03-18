import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Account from "../Components/Account";

function Profile() {
    return (
        <>
            <Navbar />
            <main class="main bg-dark">
                <div class="header">
                    <h1>
                        Welcome back
                        <br />
                        Tony Jarvis!
                    </h1>
                    <button class="edit-button">Edit Name</button>
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
