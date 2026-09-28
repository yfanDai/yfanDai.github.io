import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Publications.css";
import { publications, RESEARCH_AREAS, PUBLICATION_TOPICS, getPaperLinks, projectPath } from "../data/publications.js";
import { VenueTags, AuthorList, PaperTag } from "./PaperMeta.jsx";

export default function Publications() {
    const [selectedTag, setSelectedTag] = useState("");

    const filteredPublications = selectedTag
        ? publications.filter((p) => p.tags.includes(selectedTag))
        : publications;

    return (
        <div className="publications" id="publications" style={{marginTop:"1rem"}}>
            <div className="publications-select">
                <div className="card-title">
                    Publications
                </div>

                <select
                    className="tag-select-filter"
                    value={selectedTag}
                    onChange={(event) => setSelectedTag(event.target.value)}
                    aria-label="Filter publications by research area or topic"
                >
                    <option value="">All</option>
                    <option value="Selected">Selected</option>
                    <optgroup label="Research Areas">
                        {RESEARCH_AREAS.map((tag) => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </optgroup>
                    <optgroup label="Topics">
                        {PUBLICATION_TOPICS.map((tag) => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </optgroup>
                </select>
            </div>

            <div className="publications-info">
                <div className="publications-info-small">* indicates equal contribution, and † denotes the advising
                    professor.</div>
            </div>


            <div className="publications-list">
                {filteredPublications.map((paper) => (
                    <div key={paper.id} className="publication-card" id={paper.id}>
                        <Link to={projectPath(paper.id)} className="publication-image-link">
                            <img
                                src={paper.thumbnail ?? paper.image}
                                alt={paper.title}
                                className="publication-image"
                            />
                        </Link>

                        <div className="publication-content">
                            <VenueTags venues={paper.venues} />

                            <div className="publication-title-wrapper">
                                <Link to={projectPath(paper.id)} className="publication-title">
                                    {paper.title}
                                </Link>
                                <div className="abstract-popup">{paper.abstract}</div>
                            </div>

                            <div className="publication-authors">
                                <AuthorList authors={paper.authors} />
                            </div>

                            <div className="publication-tags">
                                {paper.tags.map((tag) => <PaperTag key={tag} tag={tag} />)}
                            </div>

                            <div className="publication-links">
                                {getPaperLinks(paper).map((link) => (
                                    <a key={link.key} href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.label}
                                    </a>
                                ))}
                                {paper.thumbnail && (
                                    <a href={paper.thumbnail} target="_blank" rel="noopener noreferrer">
                                        Full figure
                                    </a>
                                )}
                                {paper.links.msg && (
                                    <div className={"publications-msg"}>{paper.links.msg}</div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
