import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { PureComponent } from 'react';
import SimpleCard from '../News';
import SimpleTabs from '../TabsPage';
import './Main.css';
import MainCard from '../MainCard';
import StatisticExampleGroup from '../InfoBlock';
import Slider from 'react-slick';

export default class Main extends PureComponent {

    render() {
        const settings = {
            dots: true,
            infinity: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4
        };
        return (
            <main>
                <MainCard />
                <StatisticExampleGroup />
                <MDBContainer>
                    <h2 className="resources_title">Мои ресурсы в облаке</h2>
                    <SimpleTabs />
                    <h2 className="resources_title">Новости</h2>
                    <MDBRow>
                        <Slider {...settings}>
                            <SimpleCard />
                            <SimpleCard />
                            <SimpleCard />
                            <SimpleCard />
                            <SimpleCard />
                            <SimpleCard />
                        </Slider>
                    </MDBRow>
                </MDBContainer>
            </main>
        )
    }
}