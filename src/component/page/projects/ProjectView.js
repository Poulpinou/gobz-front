import React, { Component } from 'react';

class ProjectView extends Component {
    
    render(){
        const {project} = this.props;

        if(!project){
            return (
                <p className="text-centered">Aucun projet selectionné</p>
            )
        }

        return (
            <div className="project-view">
                <h1>{project.name}</h1>
                <p>{project.description}</p>
            </div>
        )
    }
}

export default ProjectView;