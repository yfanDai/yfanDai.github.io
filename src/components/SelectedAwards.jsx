import React from 'react';
import "../css/All.css"

export default function SelectedAwards() {
    const awards = [
        {
            text: "[2026] Outstanding Graduate of Hunan Province ",
            highlight: "(Top 2.5%)"
        },
        {
            text: "[2025] National Scholarship ",
            highlight: "(Top 0.5%)"
        },
        {
            text: "[2024] National Scholarship ",
            highlight: "(Top 0.5%)",
        },
        {
            text: "[2023] National Scholarship ",
            highlight: "(Top 0.5%)",
        },
    ];


    return (
        <div className="card" id="awards" style={{marginTop:"1rem"}}>
            <div className="card-title">Selected Awards</div>
            <div className="awards-list">
                {awards.map((award, index) => (
                    <div key={index} className="award-item">
                        <span className="award-icon">✦ </span>
                        <span className="award-text">
                            {award.text}
                            <span className="award-highlight">{award.highlight}</span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
