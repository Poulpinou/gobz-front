import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap';
import UserBadge from '../common/userBadge/UserBadge'
import logo from '../../img/gobz-logo.png';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Gobz
                    </Navbar.Brand>
                    { this.props.authenticated ? (
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Run actif</Nav.Link>
                            <Nav.Link href="/">Projets</Nav.Link>
                        </Nav>
                    ):(
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    )}
                    { this.props.authenticated ? (
                        <Nav>
                            <UserBadge currentUser={this.props.currentUser}/>
                            <NavDropdown title={this.props.currentUser?.name ?? "Inconnu"}>
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={this.props.onLogout}>Déconnexion</NavDropdown.Item>
                            </NavDropdown>
                            {/*<Nav.Link onClick={this.props.onLogout}>Déconnexion</Nav.Link>*/}
                        </Nav>
                    ):(
                        <Nav>
                            <Nav.Link href="/login">Connexion</Nav.Link> 
                            <Nav.Link href="/signup">Créer un compte</Nav.Link> 
                        </Nav>
                    )}
                </Navbar>
            </header>
        )
    }
}

export default AppHeader;