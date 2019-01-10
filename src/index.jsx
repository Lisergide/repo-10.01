import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'semantic-ui-css/semantic.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'typeface-roboto';
import './index.css';
import App from './App';

ReactDom.render (
    <App />,
    document.getElementById('root')
)