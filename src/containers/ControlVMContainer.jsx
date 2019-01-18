import React, { PureComponent } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class ControlVMContainer extends PureComponent {
    render() {
        return (
            <main>
                <MDBContainer>
                    <h2 className="resourse_title">Управление VM</h2>
                </MDBContainer>
            </main>
        )
    }
}