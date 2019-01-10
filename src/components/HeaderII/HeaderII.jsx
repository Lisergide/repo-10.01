import React, { PureComponent } from 'react';
import {
    Admin,
    Resource,
    ListGuesser
} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './HeaderII.css';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

export default class HeaderII extends PureComponent {
    static defaultProps = {}

    render() {
        return (
           < div className = "HeaderII">
                <Admin dataProvider={dataProvider} >
                    < Resource name="ACloud" list={ListGuesser} />
                    < Resource name="ACloud" list={ListGuesser} />
                </Admin>
           </div>
        )
    }
}