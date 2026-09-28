import React from "react";
import { Link } from "react-router-dom";
import { projects, getPaperLinks, projectPath } from "../data/publications.js";
import "../css/Publications.css";
import "../css/Projects.css";

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="card-title">Project</div>
            <div className="publications-list">
                {projects.map((project) => (
                    <div key={project.id} className="publication-card project-card" id={project.id}>
                        <Link to={projectPath(project.id)} className="publication-image-link">
                            <img src={project.image} alt={project.title} className="publication-image" />
                        </Link>
                        <div className="publication-content">
                            <div className="project-contribution">
                                <strong>Yifan Dai</strong> · {project.role}
                            </div>
                            <Link to={projectPath(project.id)} className="publication-title">
                                {project.title}
                            </Link>
                            <p className="project-summary">{project.abstract}</p>
                            <div className="publication-links">
                                {getPaperLinks(project).map((link) => (
                                    <a key={link.key} href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
