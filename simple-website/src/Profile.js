import React, { useEffect } from "react";

export default function Profile() {
    useEffect(function () {
        document.title = "Profile";
    }, []);

    return (
    <>
        <section className="section">
            <h1 className="section-title">Profile Page</h1>
            <p className="section-description">Halo, perkenalkan nama saya Tengku Muhammad Rafi Rahardiansyah</p>
        </section>
    </>
    );
}