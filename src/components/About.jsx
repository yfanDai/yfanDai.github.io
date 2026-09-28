import React from 'react';
import "../css/All.css"

function About() {
    return (
        <div className="about" id="about">
            <div className="intro-text">
                Hi, I'm <strong>Yifan Dai</strong>, a <strong>Ph.D. student</strong> from <a href="https://sai.sjtu.edu.cn" target="_blank" rel="noopener noreferrer">
                Shanghai Jiao Tong University
            </a>, advised by <a href="https://zwt233.github.io/" target="_blank" rel="noopener noreferrer">
                Prof. Wentao Zhang
            </a> at the PKU DCAI Group. I hold a bachelor's in <strong>Computer Science</strong>, and
                have worked closely with <a href="https://raylc.org/" target="_blank" rel="noopener noreferrer">
                Prof. Ray LC
            </a> (<a href="https://www.cityu.edu.hk/" target="_blank" rel="noopener noreferrer">CityU</a>) and <a
                href="https://toby.li/" target="_blank" rel="noopener noreferrer">
                Prof. Toby Jia-Jun Li
            </a> (<a href="https://www.nd.edu/" target="_blank" rel="noopener noreferrer">Notre Dame</a>).
                <br/><br/>
                {/* My research interests focus on <strong>human–AI interaction for supporting human creativity</strong> to
                achieve better cognitive support and creative collaboration, by designing interaction forms and
                generating contents that align with human intention, emotion, and cognition. */}

                My research focuses on <strong>human–AI alignment</strong>, exploring how AI systems can acquire and represent <strong>human expertise</strong> to better support <strong>creative work</strong>. Specifically, I study how tacit and subjective forms of human knowledge, such as aesthetic judgment, design principles, and creative reasoning, can be incorporated into <strong>large language models and agentic systems</strong>.


                <div className="callout">I am always open to research collaborations and coffee chats. Please feel free to contact me about any potential opportunities <strong>: )</strong></div>
            </div>
        </div>
    );
}

export default About;
