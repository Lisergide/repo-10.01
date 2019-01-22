import React from "react";
import { Container, Footer, Fa, MDBTooltip } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

class FooterPage extends React.Component {
    render() {
        return (
            <Footer className="font-small pt-4 mt-4">
                <Container>
                    <div className="d-flex flex-row justify-content-between">
                        <p className="info__line"><span className="info__line_name">Пользователей:</span> 758 <MDBTooltip placement="top" tag="span" component="Fa" tooltipContent="Пользователей"><Fa icon="user" /></MDBTooltip></p>
                        <p className="info__line"><span className="info__line_name">Серверов:</span> 699 <MDBTooltip placement="top" tag="span" component="Fa" tooltipContent="Серверов"><FontAwesomeIcon icon="server" /></MDBTooltip></p>
                        <p className="info__line"><span className="info__line_name">Используется CPU:</span> 2,437 <MDBTooltip placement="top" tag="span" component="Fa" tooltipContent="Используется CPU"><Fa icon="microchip" /></MDBTooltip></p>
                        <p className="info__line"><span className="info__line_name">Используется RAM:</span> 8,415 GB <MDBTooltip placement="top" tag="span" component="Fa" tooltipContent="Используется RAM"><FontAwesomeIcon icon="memory" /></MDBTooltip></p>
                        <p className="info__line"><span className="info__line_name">Используется HDD:</span> 102,882 GB <MDBTooltip placement="top" tag="span" component="Fa" tooltipContent="Используется HDD"><FontAwesomeIcon icon="hdd" /></MDBTooltip></p>
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