import React, { PureComponent } from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';
import SimpleCard from 'components/News';
import SimpleTabs from 'components/TabsPage';
import MainCard from 'components/MainCard';
import Slider from 'react-slick';

export default class HomeContainer extends PureComponent {
    render() {
        const settings = {
            dots: false,
            infinity: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4
        };
        return (
            <div>
                <MDBContainer>
                    <MainCard />
                    <h2 className="resourse_title">Мои ресурсы в облаке</h2>
                    <SimpleTabs />
                    <h2 className="resourse_title">Новости</h2>
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
            </div>
        )
    }
}