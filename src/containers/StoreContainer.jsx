import React, { PureComponent } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class StoreContainer extends PureComponent {
    render() {
        return (
            <main>
                <MDBContainer>
                    <h2 className="resourse_title">Магазин</h2>
                </MDBContainer>
            </main>
        )
    }
}