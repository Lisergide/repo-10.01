import React, { PureComponent } from 'react';
import { Card, CardBody, Fa, Row, Col, CardText, MDBCollapse } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";

class CardSection extends PureComponent {
  state = {
    collapseID: true
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : false
    }));
  };

  render() {
  return (
    <div>
      <a
        data-toggle="collapse"
        aria-expanded="true"
        aria-contols="basicCollapse"
        onClick={this.toggleCollapse("basicCollapse")}
      >
        <h3 className="card_section_block">
          Название плана: <span className="plan_title">Plan189_DEMO</span> ||
          Ваша Роль: <span className="plan_user">Владелец</span>
        </h3>
      </a>
      <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
        <Row className="mb-4 mt-5">
          <Col xl="4" md="6" className="mb-r">
            <Card className="cascading-admin-card">
              <div className="admin-up">
                <Fa className="success-color">
                  <FontAwesomeIcon icon="server" />
                </Fa>
                <div className="data">
                  <p>Used_VCPU/VCPU</p>
                  <h4>
                    <strong>4/4</strong>
                  </h4>
                </div>
              </div>
              <CardBody>
                <div className="progress">
                  <div
                    aria-valuemax="100"
                    aria-valuemin="0"
                    aria-valuenow="25"
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                  />
                </div>
                <CardText>Использовано 4</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" md="6" className="mb-r">
            <Card className="cascading-admin-card">
              <div className="admin-up">
                <Fa className="primary-color">
                  <FontAwesomeIcon icon="memory" />
                </Fa>
                <div className="data">
                  <p>Used_RAMGB</p>
                  <h4>
                    <strong>8/8 GB</strong>
                  </h4>
                </div>
              </div>
              <CardBody>
                <div className="progress">
                  <div
                    aria-valuemax="100"
                    aria-valuemin="0"
                    aria-valuenow="25"
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "100%" }}
                  />
                </div>
                <CardText>Использовано 8 GB</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" md="6" className="mb-r">
            <Card className="cascading-admin-card">
              <div className="admin-up">
                <Fa className="red accent-2">
                  <FontAwesomeIcon icon="hdd" />
                </Fa>
                <div className="data">
                  <p>Used_DISKGB</p>
                  <h4>
                    <strong>128/128 GB</strong>
                  </h4>
                </div>
              </div>
              <CardBody>
                <div className="progress">
                  <div
                    aria-valuemax="100"
                    aria-valuemin="0"
                    aria-valuenow="25"
                    className="progress-bar red accent-2"
                    role="progressbar"
                    style={{ width: "100%" }}
                  />
                </div>
                <CardText>Использовано 128 GB</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </MDBCollapse>
    </div>
  );
};
}

export default CardSection;
