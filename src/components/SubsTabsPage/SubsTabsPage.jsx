import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { MDBInput, MDBBtn, MDBRow, MDBCol, MDBFormInline, MDBIcon } from 'mdbreact';
import ControlledExpansionPanels from '../Accordion';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MyProgressBar from '../ProgressBar';
import CardSection from '../Card';
import ModalMakeVM from 'components/ModalMakeVM';
import { Grid } from '@material-ui/core';



const dark = { backgroundColor: '#1C2331', color: '#fff' };

const theme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
    typography: { useNextVariants: true },
});

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#1C2331',
    },
    palette: {
        primary: '#1C2331',
        secondary: 'red',
    },
});

class SubsTabsPage extends PureComponent {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;


        return <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
              <AppBar position="static">
                <Tabs value={value} onChange={this.handleChange} style={dark}>
                  <Tab label="Тестовый ACloud" />
                  <Tab label="Промышленный ACloud" />
                  <Tab label="Внешнее облако" />
                  <Tab label="Файловое облако" />
                  <MDBFormInline className="md-form ml-auto m-2">
                    <MDBIcon icon="search" />
                    <input className="form-control ml-3 mr-sm-2" type="text" placeholder="Найти VM" aria-label="Search" />
                  </MDBFormInline>
                </Tabs>
              </AppBar>
              {value === 0 && <TabContainer>
                  <div className="subs_block">
                    <h3>
                      На данный момент у вас нет виртуальных машин.
                    </h3>
                    <h3>Воспользуйтесь функцией "Создать VM".</h3>
                    <ModalMakeVM />
                  </div>
                  <CardSection />
                  <CardSection />
                </TabContainer>}
              {value === 1 && <TabContainer>
                  <MDBRow>
                    <MDBCol md="6">
                      <div className="subs_block_left">
                        <h3 className="subs_block_title">
                          На данный момент у вас нет виртуальных машин.
                        </h3>
                        <h3>Воспользуйтесь функцией "Создать VM".</h3>
                        <ModalMakeVM />
                      </div>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="subs_block_right">
                        <h6>
                          Промышленный ACloud введен в ОПЭ&nbsp;
                          <a className="link_t-it_0459" href="http://docs/dms/directionsit/_layouts/WSS/Lists/list_dms_directionsit__DirectionsIT_564/DispForm.aspx?ID=4031&closeOnCancel=true&showDispFormWithoutEditAccess=true&Source=http%3a%2f%2fdocs%2f_layouts%2fWSS%2fWSSC.V4.DMS.Publishing%2fCard%2fCloseItem.aspx%3frubricID%3d1319%26itemID%3d4031%26listID%3d564%26webID%3d57">
                            Распоряжением ИТ Р-ИТ_0459
                          </a>
                        </h6>
                        <ol>
                          <li>
                            Администрирование операционной системы на
                            стороне владельца облачного ресурса.
                          </li>
                          <li>
                            Резервное копирование облачных серверов
                            организуется и производится силами
                            сопровождения облачной инфраструктуры два
                            раза в неделю с глубиной хранения 14 дней.
                          </li>
                          <li>
                            Список типов операционных систем для
                            размещения в промышленном ACloud строго в
                            соответсвии со стандартом (Windows Server
                            2012 и выше, SLES, RedHat).
                          </li>
                          <li>
                            Промышленное облако не предназначено для
                            размещения серверов баз данных и файловых
                            хранилищ.
                          </li>
                          <a className="subs_instruction_link" href="http://confluence.moscow.alfaintra.net/pages/viewpage.action?pageId=178240131">
                            Инструкции по заказу облака.
                          </a>
                        </ol>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <CardSection />
                </TabContainer>}
              {value === 2 && <TabContainer>
                  <div className="subs_block">
                    <h3>
                      На данный момент у вас нет виртуальных машин.
                    </h3>
                    <h3>Воспользуйтесь функцией "Создать VM".</h3>
                    <ModalMakeVM />
                  </div>
                  <CardSection />
                </TabContainer>}
              {value === 3 && <TabContainer>
                  <MDBRow>
                    <MDBCol md="6">
                      <div className="subs_block make_file_cloud_2">
                        <h2 className="file_cloud_title sub_file_cloud_title">
                          Файловое облако
                        </h2>
                        <form action="#">
                          <div>
                            <MDBInput hint="Введите название папки" className="file_cloud_input" />
                            <MDBBtn color="danger">Создать</MDBBtn>
                          </div>
                        </form>
                      </div>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="subs_block_right">
                        <h3>Важно!</h3>
                        <ul className="list-unstyled">
                          <li>
                            1. Ваш FreeFolder имеет ограничение по
                            объему в 10Гб.
                          </li>
                          <li>
                            2. Данный сервис не желателен для
                            использования бизнес системами и сервисами
                            Банка. (В случае данной необходимости
                            направьте запрос в свободной форме на п/я
                            FreeFolder@alfabank.ru. Консультация по
                            телефону: 0117860.)
                          </li>
                          <li>
                            3. Не предназначен для размещения
                            информации, содержащей персональные данные,
                            паспортные данные, данные о кредитных
                            картах.
                          </li>
                          <li>
                            4. Воспользуйтесь Инструкцией по работе с
                            облачным хранилищем.
                          </li>
                          <li>
                            5. Поскольку мы предоставляем рабочее
                            пространство, имеется список ограничений на
                            формат файлов, которые можно загружать:
                            исполняемые файлы: *.bat *.cmd *.msi *.vbs
                            *.exe *.dll базы LN: *.nsf media: *.mp4
                            *.wmv Common Audio Files Common Video Files
                          </li>
                        </ul>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow />
                </TabContainer>}
            </MuiThemeProvider>
          </div>;
    }
}

SubsTabsPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubsTabsPage);