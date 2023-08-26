import React from "react";
import { formatProjectTitle } from "../../utils";
import './style.css';

const Project = ({project}) => {
    return (
        <div className="col">
            <a href={project.link}>
                <div className="card h-100 bg-secondary">
                    <img
                        src={require(`../../assets/projects/${project.name}.png`)}
                        className="card-img h-50"
                        alt={formatProjectTitle(project.name)} 
                    />
                    <div className="card-body">
                        <h3 className="card-title strokeme">
                            {formatProjectTitle(project.name)}&nbsp;&nbsp;&nbsp;
                                <a href={project.repo}>
                                    <i className="fab fa-github"></i>
                                </a>
                        </h3>
                        <p className="card-text">
                            {project.description}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Project