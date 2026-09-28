import React from "react";
import "../css/Internship.css";
import kling from "../assets/logo/kling.svg";

export default function Internship() {
    const experience = {
        organization: {
            name: "Kling AI",
            link: "https://klingai.com/",
            logo: kling,
        },
        period: "2025.11 - 2026.09",
        role: "Research Intern, Foundation Model Team",
    };

    return (
        <div className="card" id="internship" style={{ marginTop: "1rem" }}>
            <div className="card-title">Internship</div>
            <div className="timeline-container">
                <div className="timeline-item">
                    <div className="timeline-label">
                        <div className="exp-type work">Work</div>
                        <div className="timeline-period-label">
                            {experience.period.replace(" - ", "\n–\n")}
                        </div>
                    </div>

                    <div className="timeline-content">
                        <div className="org-logo-container">
                            <img
                                src={experience.organization.logo}
                                alt="Kling AI logo"
                                className="org-logo"
                            />
                        </div>

                        <div className="exp-container">
                            <div className="timeline-header">
                                <div className="exp-organization">
                                    <a
                                        className="exp-organization-name"
                                        href={experience.organization.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {experience.organization.name}
                                    </a>
                                    <div className="exp-role">{experience.role}</div>
                                </div>
                                <div className="exp-period">{experience.period}</div>
                            </div>

                            <ul className="exp-details">
                                <li>
                                    <strong>Omni Pre-training:</strong> Contributed to pre-training next-generation Omni foundation models.
                                </li>
                                <li>
                                    <strong>Audio Understanding:</strong> Conducted model training and systematic evaluation for the Audio Understanding component.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
