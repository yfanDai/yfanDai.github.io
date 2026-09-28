import React from 'react';
import "../css/All.css"

function About() {
    return (
        <div className="about" id="about">
            <div className="intro-text">
                Hi, I'm <strong>Yifan Dai</strong>, a <strong>Ph.D. student</strong> from <a href="https://sai.sjtu.edu.cn" target="_blank" rel="noopener noreferrer">
                School of Artificial Intelligence, Shanghai Jiao Tong University
            </a>, advised by <a href="https://zwt233.github.io/" target="_blank" rel="noopener noreferrer">
                Prof. Wentao Zhang
            </a> at the PKU DCAI Group. I received my bachelor's degree in Computer Science and Technology from Hunan University. I have also worked closely with <a href="https://ccchengff.github.io/" target="_blank" rel="noopener noreferrer">Fangcheng Fu</a> (SJTU), <a href="https://ngcee.hnu.edu.cn/szdw/dsdw/xnbssds/rgzn/cxx.htm" target="_blank" rel="noopener noreferrer">Xiangxiang Zeng</a> (HNU), and <a href="https://csce.suat-sz.edu.cn/info/1011/1461.htm" target="_blank" rel="noopener noreferrer">Xiangzheng Fu</a> (SUAT).
                <br/><br/>
                My research centers on <strong>multimodal intelligence</strong>, spanning multimodal understanding, generation, and models that unify the two. In particular, I am interested in <strong>Omni Foundation Models</strong> that enable native omni-modal perception, understanding, and reasoning. My broader interests include <strong>World Models</strong> and <strong>Embodied Intelligence</strong>, toward building general-purpose intelligent systems that can perceive, reason about, and interact with the physical world.


                <div className="callout">I am always open to research collaborations and coffee chats. Please feel free to contact me about any potential opportunities <strong>: )</strong></div>
            </div>
        </div>
    );
}

export default About;
