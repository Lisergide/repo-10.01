import React, { PureComponent } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class FAQContainer extends PureComponent {
    render() {
        return (
            <main>
                <MDBContainer>
                    <h2 className="resourse_title">Полезная информация</h2>
                </MDBContainer>
            </main>
        )
    }
}