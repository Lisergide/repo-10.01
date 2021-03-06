import { MDBCollapse, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Fa, MDBNavLink } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './acloud_logo_header.svg';
import './Header.css';

class FixedNavbarExample extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            collapse: false,
            active: false,
        };
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    handleClick = (event) => {
        this.setState({ active: !this.state.active });
    }

    render() {
        const bgDark = { backgroundColor: '#1C2331' }
        const fSize = { fontSize: '1.2rem', fontWeight: 'bold' }
        return (
            <MDBNavbar style={bgDark} dark expand="md" scrolling fixed="top">
                <MDBContainer>
                    <MDBNavbarBrand href="/#">
                        <img className="logo" src={logo} alt="alfa" />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.onClick} />
                    <MDBCollapse isOpen={this.state.collapse} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem onClick={this.handleClick}>
                                <MDBNavLink exact={true} to="/home">Главная</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem onClick={this.handleClick}>
                                <MDBNavLink to="/subscribe">Подписки</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem onClick={this.handleClick}>
                                <MDBNavLink to="/control">Управления VM</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem onClick={this.handleClick}>
                                <MDBNavLink to="/calculator">Калькулятор</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem onClick={this.handleClick}>
                                <MDBNavLink to="/faq">Полезная информация</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem onClick={this.handleClick}>
                                <MDBNavLink to="/store">Магазин</MDBNavLink>
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
                                <MDBNavLink to="#"><MDBIcon icon="calculator" /></MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <Dropdown>
                                    <DropdownToggle nav>
                                        <MDBIcon icon="info-circle" />
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-default" right>
                                        <DropdownItem style={fSize} href="#!">Пользователей: 758 <Fa icon="user" /></DropdownItem>
                                        <DropdownItem style={fSize} href="#!">Серверов: 699 <FontAwesomeIcon icon="server" /></DropdownItem>
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
        );
    }
}

export default FixedNavbarExample;