import React, { Component } from 'react';
import Avatar from '../../common/avatar';

class ProjectItem extends Component {
    render(){
        const {project, isActive, onClick} = this.props;

        return (
            <div onClick={onClick} className={"projectItem " + (isActive ? "active": "")}>
                <h5 className="title text-primary text-bold">
                    <Avatar imageUrl={null} name={project.name} size="sm"/>
                    {project.name}
                </h5> 
                <p className="description">
                    {project.description}
                </p>
            </div>
        )
    }
}

export default ProjectItem;