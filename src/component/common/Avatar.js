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
                        <img className="img-avatar-sm" src={this.props.imageUrl} alt={this.props.name}/>
                    ) : (
                        <div className="text-avatar-sm">
                            <span>{this.props.name && this.props.name[0]}</span>
                        </div>
                    )
                }
            </Badge>
        )
    }
}

export default Avatar;