import React, { Component } from 'react';
import {
    Badge
} from 'react-bootstrap';

class Avatar extends Component {
    render() {
        return (
            <Badge className="avatar">
                { 
                    this.props.imageUrl ? (
                        <img className={"img-avatar-" + (this.props.size ?? "md")} src={this.props.imageUrl} alt={this.props.name}/>
                    ) : (
                        <div className={"text-avatar-" + (this.props.size ?? "md")}>
                            <span>{this.props.name && this.props.name[0]}</span>
                        </div>
                    )
                }
            </Badge>
        )
    }
}

export default Avatar;