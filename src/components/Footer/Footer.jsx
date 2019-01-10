import React, { PureComponent } from 'react';
import './Footer.css';

export default class Footer extends PureComponent {
    static defaultProps = {}

    render() {
        return (
            <footer className="footer footer-copyright text-center py-3">

                &copy; {new Date().getFullYear()} Copyright:{" "} Alfa Bank.
                Team <a href="cloud-support@alfabank.ru">cloud-support@alfabank.ru</a>

            </footer>
        )
    }
}
