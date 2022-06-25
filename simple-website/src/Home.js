import React, { useEffect } from "react";

export default function Home() {
    useEffect(function () {
        document.title = "Home";
    }, []);

    return (
    <>
        <section className="section">
            <h1 className="section-title">Welcome, to my website</h1>
            <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem diam, porta vel fermentum nec, aliquet in justo. Suspendisse consequat quam metus. Ut tortor lacus, facilisis vitae lectus quis, sollicitudin rhoncus erat. Pellentesque luctus sed lectus at facilisis. Fusce ut nulla est. Morbi ac tristique nibh, eget maximus augue. In ullamcorper sagittis sapien, a congue nisi tincidunt nec. Sed sagittis maximus elit, et pellentesque tellus condimentum sit amet. Duis cursus congue mi, at semper metus porttitor dignissim. Fusce laoreet libero non arcu fermentum condimentum. Etiam elementum odio non ipsum posuere, quis feugiat orci feugiat. Etiam dolor nisi, mollis et varius quis, lacinia id est.</p>
        </section>
    </>
    );
}