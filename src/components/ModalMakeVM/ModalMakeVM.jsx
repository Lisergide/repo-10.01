import React, { PureComponent } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import InputRange from 'react-input-range';

class ModalMakeVM extends PureComponent {
    state = {
        modal14: false,
        valueCPU: 0,
        valueMemory: 1024,
        valueDisk: 10,
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
   
    render() {
        return (
            <MDBContainer>
                <MDBBtn className="make_cloud_btn" color="danger" onClick={this.toggle(14)}>Создать VM</MDBBtn>
                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader toggle={this.toggle(14)}>Управление Виртуальными Машинами</MDBModalHeader>
                    <MDBModalBody>
                        <div>
                            <select className="browser-default custom-select">
                                <option>Название подписки</option>
                                <option value="1">PLAN189_DEMO</option>
                                <option value="2">PLAN190_DEMO</option>
                                <option value="3">PLAN191_DEMO</option>
                            </select>
                        </div>
                        <div>
                            <select className="browser-default custom-select">
                                <option>Владелец подписки</option>
                                <option value="1">u_m113s@moscow.alfaintra.net</option>
                                <option value="2">u_m114s@moscow.alfaintra.net</option>
                                <option value="3">u_m115s@moscow.alfaintra.net</option>
                            </select>
                        </div>
                        <MDBInput hint="Название VM" type="text" />
                        <div>
                            <select className="browser-default custom-select">
                                <option>Шаблон</option>
                                <option value="1">OpenSUSE (Static IP)</option>
                                <option value="2">WS2012R2 std (Static IP)</option>
                                <option value="3">WS2016 STD (Static IP)</option>
                                <option value="4">CentOS 7.3 (Static IP)</option>
                            </select>
                        </div>
                        <div>
                            <select className="browser-default custom-select">
                                <option>VM net</option>
                                <option value="1">DVC_vmnet2</option>
                                <option value="2">DVC_vmnet2</option>
                                <option value="3">DVC_vmnet2</option>
                            </select>
                        </div>
                        <MDBInput hint="Логин*" type="text" />
                        <MDBInput hint="Пароль*" type="password" />
                        <MDBInput hint="Повторите Пароль*" type="password" />
                        <h4>CPU:</h4>
                        <InputRange
                            maxValue={4}
                            minValue={0}
                            value={this.state.valueCPU}
                            onChange={valueCPU => this.setState({ valueCPU })} />
                        <h4>Memory (Mb):</h4>
                        <InputRange
                            maxValue={8192}
                            minValue={1024}
                            step={1024}
                            value={this.state.valueMemory}
                            onChange={valueMemory => this.setState({ valueMemory })} />
                        <h4>Disk (Gb):</h4>
                        <InputRange
                            maxValue={128}
                            minValue={10}
                            step={1}
                            value={this.state.valueDisk}
                            onChange={valueDisk => this.setState({ valueDisk })} />
          </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="danger" onClick={this.toggle(14)}>Отменить</MDBBtn>
                        <MDBBtn color="success">Создать</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default ModalMakeVM;
