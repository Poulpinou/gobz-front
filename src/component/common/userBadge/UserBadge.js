import React, { Component } from 'react';
import {
    Badge
} from 'react-bootstrap';

class UserBadge extends Component {
    render() {
        return (
            <Badge className="avatar">
                { 
                    this.props.currentUser.imageUrl ? (
                        <img className="img-avatar-sm" src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                    ) : (
                        <div className="text-avatar-sm">
                            <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                        </div>
                    )
                }
            </Badge>
        )
    }
}

export default UserBadge;