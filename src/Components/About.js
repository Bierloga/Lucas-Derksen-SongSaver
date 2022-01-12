import React from "react";

const About = () => {
    return (
        <div>
            <h1 className="about-title">My Favourite Music Video's</h1>
            <div className="about-container">
                <iframe
                    className="about-video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/o6R_W3nY7ag"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                <iframe
                    className="about-video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rwz7-h9LCDU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    );
}

export default About;

