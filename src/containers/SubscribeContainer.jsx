import React, { PureComponent } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCardBody, MDBIcon, MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyProgressBar from 'components/ProgressBar';
import ModalMakeVM from 'components/ModalMakeVM';
import folderLogo from '../folder_solid_acloud.svg';


export default class SubscribeContainer extends PureComponent {
    render() {
        return (
            <div className="subs_content">
                <MDBContainer>
                    <MDBRow className="subs_row">
                        <MDBCol md="4">
                            <div className="subs_block">
                                <h2>Тестовый ACloud</h2>
                                <h5>На данный момент у вас нет виртуальных машин.</h5>
                                <h5>Воспользуйтесь функцией "Создать VM".</h5>
                                <ModalMakeVM />
                            </div>
                        </MDBCol>
                        <MDBCol md="4">
                            <div className="subs_block">
                                <h2 className="prom_acloud_title">Промышленный ACloud
                                    <MDBPopover component="a" placement="bottom" popoverBody={<MDBIcon icon="info-circle" />} className="d-inline-block info_prom_acloud">
                                        <MDBPopoverHeader>Промышленный ACloud введен в ОПЭ Распоряжением Распоряжение ИТ Р-ИТ_0459</MDBPopoverHeader>
                                        <MDBPopoverBody>
                                            <ol>
                                                <li>Администрирование операционной системы на стороне владельца облачного ресурса.</li>
                                                <li>Резервное копирование облачных серверов организуется и производится силами сопровождения облачной инфраструктуры два раза в неделю с глубиной хранения 14 дней.</li>
                                                <li>Список типов операционных систем для размещения в промышленном ACloud строго в соответсвии со стандартом (Windows Server 2012 и выше, SLES, RedHat).</li>
                                                <li>Промышленное облако не предназначено для размещения серверов баз данных и файловых хранилищ.</li>
                                                <a href="http://confluence.moscow.alfaintra.net/pages/viewpage.action?pageId=178240131">Инструкции по заказу облака.</a> 
                                            </ol>
                                            
                                        </MDBPopoverBody>
                                    </MDBPopover>
                                </h2>
                                <h5>На данный момент у вас нет виртуальных машин.</h5>
                                <h5>Воспользуйтесь функцией "Создать VM".</h5>
                                <ModalMakeVM />
                            </div>
                        </MDBCol>
                        <MDBCol md="4">
                            <div className="subs_block">
                                <h2>Внешнее облако</h2>
                                <h5>На данный момент у вас нет виртуальных машин.</h5>
                                <h5>Воспользуйтесь функцией "Создать VM".</h5>
                                <ModalMakeVM />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="subs_row">
                        <MDBCol md="4">
                            <div className="subs_block">
                                <h2>Тестовый ACloud</h2>
                                <p className="plan_name_header">Название плана: <span className="plan_title">Plan189_DEMO</span> || Ваша Роль: <span className="plan_user">Владелец</span></p>
                                <MyProgressBar />
                            </div>
                        </MDBCol>
                        <MDBCol md="4">
                            <div className="subs_block">
                                <h2>Промышленный ACloud</h2>
                                <p className="plan_name_header">Название плана: <span className="plan_title">Plan189_DEMO</span> || Ваша Роль: <span className="plan_user">Владелец</span></p>
                                <MyProgressBar />
                            </div>
                        </MDBCol>
                        <MDBCol md="4">
                            <div className="subs_block">
                                <h2>Внешнее облако</h2>
                                <p className="plan_name_header">Название плана: <span className="plan_title">Plan189_DEMO</span> || Ваша Роль: <span className="plan_user">Владелец</span></p>
                                <MyProgressBar />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="subs_row">
                        <MDBCol md="6">
                            <div className="subs_block make_file_cloud">
                                <h2 className="sub_file_cloud_title">Файловое облако</h2>
                                <form action="#">
                                    <div>
                                        <MDBInput hint="Введите название папки" className="file_cloud_input" />
                                        <MDBBtn color="danger">Создать</MDBBtn>
                                    </div>
                                </form>
                            </div>
                        </MDBCol>
                        <MDBCol md="6">
                            <div className="subs_block">
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
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="subs_row">
                        <MDBCol size="6">
                            <div className="subs_block d-flex">
                            <img className="folder_logo" src={folderLogo} alt="folder logo"/>
                                <h3>Ваша папка: uM113S</h3>
                                
                            </div>
                        </MDBCol>
                        <MDBCol size="6">
                            <div className="subs_block">
                                .col-6
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}