import * as React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <ul className="mu-nav-bar">
                    <li><Link to={routes.Home}>MiniURL</Link></li>
                    <li><Link to={routes.Custom}>Custom</Link></li>
                </ul>
                <ul className="mu-nav-bar mv-nav-bar-right">
                    <li><Link to={routes.About}>About</Link></li>
                </ul>
            </header>
        );
    }
}

export default Header;
