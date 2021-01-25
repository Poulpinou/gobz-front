import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="container">
                    <h1>Bienvenue sur Gobz!</h1>
                    {this.props.authenticated != true ?? (
                        <h3>Veuillez vous connecter</h3>
                    )}
                </div>
            </div>
        )
    }
}

export default HomePage;