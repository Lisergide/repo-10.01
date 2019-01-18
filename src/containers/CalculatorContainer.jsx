import React, { PureComponent } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class CalculatorContainer extends PureComponent {
    render() {
        return (
            <main>
                <MDBContainer>
                    <h2 className="resourse_title">Калькулятор</h2>
                </MDBContainer>
            </main>
        )
    }
}