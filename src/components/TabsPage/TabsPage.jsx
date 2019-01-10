import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ControlledExpansionPanels from '../Accordion';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MyProgressBar from '../ProgressBar';
import CardSection from '../Card';

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

class SimpleTabs extends PureComponent {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;


        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} style={dark}>
                        <Tab label="Тестовый ACloud" />
                        <Tab label="Промышленный ACloud" />
                        <Tab label="Внешнее облако" />
                        <Tab label="Файловое облако" />
                    </Tabs>
                </AppBar>
                    {value === 0 && <TabContainer><CardSection /></TabContainer>}
                    {value === 1 && <TabContainer><MyProgressBar /></TabContainer>}
                    {value === 2 && <TabContainer><ControlledExpansionPanels /></TabContainer>}
                {value === 3 && <TabContainer>Файловое облако</TabContainer>}
                </MuiThemeProvider>
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);