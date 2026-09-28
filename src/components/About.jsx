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
            </a> at the PKU DCAI Group. I received my bachelor's degree in Computer Science and Technology from Hunan University. I have also worked closely with <a href="https://ccchengff.github.io/" target="_blank" rel="noopener noreferrer">Fangcheng Fu</a> (SJTU), <a href="https://ngcee.hnu.edu.cn/szdw/dsdw/xnbssds/rgzn/cxx.htm" target="_blank" rel="noopener noreferrer">Xiangxiang Zeng</a> (HNU), and <a href="https://csce.suat-sz.edu.cn/info/1011/1461.htm" target="_blank" rel="noopener noreferrer">Xiangzheng Fu</a> (SUAT).
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
