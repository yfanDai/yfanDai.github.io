import React from 'react';
import face from '../assets/face.jpg';
import "../css/Hero.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoogleScholar } from "react-icons/fa6";

function Hero() {
    const links = [
        { icon: <MdEmail />, url: "mailto:lucyling0224@gmail.com" },
        { icon: <FaGithub />, url: "https://github.com/LucyLing24" },
        { icon: <FaGoogleScholar />, url: "https://scholar.google.com/citations?user=YOUR_ID&user=wsRlBO4AAAAJ" },
        { icon: <FaLinkedin />, url: "https://linkedin.com/in/lucyling24" },
    ];

    return (
        <div className="hero-grid">
            <div className="hero-left">
                <img
                    src={face}
                    alt="Profile"
                    className="profile-pic"
                />
                <div className="hero-meta">
                    <div className="meta-name">Yifan Dai</div>
                    Ph.D. Student @ SJTU
                    <div className="meta-description">
                        <div>🔮 AI & HCI Researcher</div>
                        <div>👩🏻‍💻 Full-stack Developer</div>
                        <div>🧚🏻‍♀️ UI & UX Designer</div>
                    </div>
                    <div className="contact-small">
                        {links.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-link"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                    <div className="small-text">Last Updated Date: 2026/09/24</div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
