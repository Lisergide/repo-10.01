import React, { PureComponent } from 'react'
import FixedNavbarExample from 'components/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMemory, faServer, faHdd } from '@fortawesome/free-solid-svg-icons';
import FooterPage from 'components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import './App.css';


library.add(faMemory, faServer, faHdd)

export default class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <div className="root_content">
              <header className="header">
                <FixedNavbarExample />
              </header>
              <main className="content p-5">
                <Switch>
                  {routes.map((route, idx) => (
                    <Route key={idx} {...route} />
                  ))}
                </Switch>
              </main>
              <FooterPage />
            </div>
          </Router>;
    }
}
