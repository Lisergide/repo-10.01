import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { PureComponent } from 'react';
import SimpleCard from '../News';
import SimpleTabs from '../TabsPage';
import './Main.css';
import MainCard from '../MainCard';
import StatisticExampleGroup from '../InfoBlock';

export default class Main extends PureComponent {
render() {
    return(
        <main>
            <MainCard />
            <StatisticExampleGroup />
        <MDBContainer>
                <h2 className="resources_title">Мои ресурсы в облаке</h2>
                <SimpleTabs />
                <h2 className="resources_title">Новости</h2>
            <MDBRow>
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
            </MDBRow>
        </MDBContainer>
        </main>
    )
}
}