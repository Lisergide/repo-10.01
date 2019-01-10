import React, { PureComponent } from 'react'

import Main from 'components/Main';
import FixedNavbarExample from 'components/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMemory, faServer, faHdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from 'components/Footer';

library.add(faMemory, faServer, faHdd)

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <header className="header">
                    <FixedNavbarExample />
                </header>
                <main className="main">
                    <Main />
                </main>
                <Footer />
            </div>
        );
    }
}
