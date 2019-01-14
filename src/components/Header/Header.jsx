import { MDBCollapse, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Fa } from 'mdbreact';
import React, { PureComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './acloud_logo_header.svg';
import './Header.css';

class FixedNavbarExample extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        const bgDark = { backgroundColor: '#1C2331' }
        const fSize = { fontSize: '1.2rem', fontWeight: 'bold' }
        return (
            <div>
                <Router>
                    <header>

                        <MDBNavbar style={bgDark} dark expand="md" scrolling fixed="top">
                            <MDBContainer>
                                <MDBNavbarBrand href="/">
                                    <img className="logo" src={logo} alt="alfa" />
                                </MDBNavbarBrand>
                                <MDBNavbarToggler onClick={this.onClick} />
                                <MDBCollapse isOpen={this.state.collapse} navbar>
                                    <MDBNavbarNav left>
                                        <MDBNavItem active>
                                            <MDBNavLink to="#">Главная</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#">Подписки</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#">Управления VM</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#">Калькулятор</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#">Полезная информация</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#">Магазин</MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                    <MDBNavbarNav right>
                                        <MDBNavItem>
                                            <MDBNavLink to="#"><MDBIcon icon="cloud" /></MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#"><MDBIcon icon="cog" /></MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                        <Dropdown>
                                            <DropdownToggle nav>
                                                    <MDBIcon icon="info-circle" />
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-default" right>
                                                    <DropdownItem style={fSize} href="#!">Пользователей: 758 <Fa icon="user" /></DropdownItem>
                                                    <DropdownItem style={fSize} href="#!">Серверов: 31,107 <FontAwesomeIcon icon="server" /></DropdownItem>
                                                    <DropdownItem style={fSize} href="#!">Используется CPU: 2,437 <Fa icon="microchip" /></DropdownItem>
                                                    <DropdownItem style={fSize} href="#!">Используется RAM: 8,415 GB <FontAwesomeIcon icon="memory" /></DropdownItem>
                                                    <DropdownItem style={fSize} href="#!">Используется HDD: 102,882 GB <FontAwesomeIcon icon="hdd" /></DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                    </header>
                </Router>
            </div>
        );
    }
}

export default FixedNavbarExample;