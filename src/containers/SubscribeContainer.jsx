import React, { PureComponent } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCardBody } from 'mdbreact';
import MyProgressBar from 'components/ProgressBar';
import ChartsPage from 'components/LineChart';


export default class SubscribeContainer extends PureComponent {
    render() {
        return (
            <div className="subs_content">
                <MDBContainer >
                    <MDBRow className="subs_row">
                        <MDBCol md="4">
                            <h2>Тестовый ACloud</h2>
                            <MyProgressBar />
                        </MDBCol>
                        <MDBCol md="4">
                            <h2>Промышленный ACloud</h2>
                            <MyProgressBar />
                        </MDBCol>
                        <MDBCol md="4">
                            <h2>Внешнее облако</h2>
                            <MyProgressBar />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="subs_row">
                        <MDBCol md="6">
                            <h2>Файловое облако</h2>
                            <form action="#">
                                <div>
                                    <MDBInput className="file_cloud_input" label="Введите название папки" />
                                    <MDBBtn color="danger">Создать</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                        <MDBCol md="6">
                            <MDBCardBody className>
                            <h3>Важно!</h3>
                            <ul className="list-unstyled">
                                    <li>1. Ваш FreeFolder имеет ограничение по объему в 10Гб.</li>
                                    <li>2. Данный сервис не желателен для использования бизнес системами и сервисами Банка. (В случае данной необходимости направьте запрос в свободной форме на п/я FreeFolder@alfabank.ru. Консультация по телефону: 0117860.)</li>
                                    <li>3. Не предназначен для размещения информации, содержащей персональные данные, паспортные данные, данные о кредитных картах.</li>
                                    <li>4. Воспользуйтесь Инструкцией по работе с облачным хранилищем.</li>
                                    <li>5. Поскольку мы предоставляем рабочее пространство, имеется список ограничений на формат файлов, которые можно загружать:
                                        исполняемые файлы: *.bat *.cmd *.msi *.vbs *.exe *.dll
                                        базы LN: *.nsf
                                        media: *.mp4 *.wmv Common Audio Files Common Video Files
                                    </li>
                            </ul>
                                </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="subs_row">
                        <MDBCol size="6">
                            <ChartsPage />
                        </MDBCol>
                        <MDBCol size="6">
                            .col-6
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}