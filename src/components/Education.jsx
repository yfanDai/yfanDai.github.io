import React from 'react';
import "../css/All.css"; // 确保你的 CSS 路径正确

export default function Education() {
    const education = [
        {
            university: "Shanghai Jiao Tong University",
            degree: "Ph.D. in Computer Science and Technology",
            period: "2026.09 - present",
            location: "Shanghai, China"
        },
        {
            university: "Hunan University",
            degree: "Bachelor of Computer Science and Technology",
            period: "2022.09 - 2026.06",
            location: "Hunan, China"
        }
    ];

    return (
        <div className="card" id="education" style={{marginTop:"1rem"}}>
            <div className="card-title">Education</div>
            <div className="education-list">
                {education.map((edu, index) => (
                    <div key={index} className="education-item">

                        <div className="education-header">
                            <h3 className="education-university">{edu.university}</h3>
                            <div className="education-period">
                                {edu.period}
                                <div className="education-location">{edu.location}</div>
                            </div>
                        </div>

                        <div className="education-details">
                            <p className="education-degree">
                                {edu.degree}
                                {edu.college && `, ${edu.college}`}
                                {edu.gpa && <span className="education-gpa">, GPA: <strong>{edu.gpa}.</strong></span>}
                            </p>
                        </div>

                        {edu.courses && edu.courses.length > 0 && (
                            <div className="education-courses">
                                <div>Courses:</div>
                                <ul>
                                    {edu.courses.map((course, i) => (
                                        <li key={i}>
                                            {course.name} ({course.grade})
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}
