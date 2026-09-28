import React from "react";
import { Link } from "react-router-dom";
import { PiStarFill, PiStarFourFill } from "react-icons/pi";
import { projects, getPaperLinks, projectPath } from "../data/publications.js";
import { AuthorList } from "./PaperMeta.jsx";
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
                            <div className="publication-title-wrapper">
                                <Link to={projectPath(project.id)} className="publication-title">
                                    {project.title}
                                </Link>
                                <div className="abstract-popup">{project.abstract}</div>
                            </div>
                            <div className="publication-authors">
                                <AuthorList authors={project.authors} />
                            </div>
                            <div className="project-footer">
                                <div className="publication-links">
                                    {getPaperLinks(project).map((link) => (
                                        <a key={link.key} href={link.url} target="_blank" rel="noopener noreferrer">
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                                <span className="project-contribution">
                                    <span className="project-contribution-star" aria-hidden="true">
                                        <PiStarFill className="contributor-star-main" />
                                        <PiStarFourFill className="contributor-star-sparkle" />
                                    </span>
                                    {project.role}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
