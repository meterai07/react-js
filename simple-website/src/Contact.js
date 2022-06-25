import React, { useEffect } from "react";

export default function Contact() {
    useEffect(function () {
        document.title = "Contact";
    },[]);

    return (
    <>
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p className="section-description">Hubungi saya dengan kontak dibawah ini</p>
            <ul>
                <li>WA: ---</li>
                <li>EMAIL: ---</li>
            </ul>
            <p className="section-description">Sosial Media</p>
            <ul>
                <li>
                    <a href="https://instagram.com/muhrafisyh" target={'_blank' } rel="noreferrer">@muhrafisyh</a>
                </li>
            </ul>
        </section>
    </>
    );
}