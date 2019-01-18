import React from "react";
import { Container, Footer, Fa } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

class FooterPage extends React.Component {
    render() {
        return (
            <Footer className="font-small pt-4 mt-4">
                <Container>
                    <div className="d-flex flex-row justify-content-between">
                        <p className="info__line">Пользователей: 758 <Fa icon="user" /></p>
                        <p className="info__line">Серверов: 699 <FontAwesomeIcon icon="server" /></p>
                        <p className="info__line">Используется CPU: 2,437 <Fa icon="microchip" /></p>
                        <p className="info__line">Используется RAM: 8,415 GB <FontAwesomeIcon icon="memory" /></p>
                        <p className="info__line">Используется HDD: 102,882 GB <FontAwesomeIcon icon="hdd" /></p>
                    </div>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "} Alfa Bank.
                        Team <a href="cloud-support@alfabank.ru">cloud-support@alfabank.ru</a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;