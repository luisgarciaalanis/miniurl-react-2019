import * as React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <ul className="mu-nav-bar">
                    <li><Link to="/">MiniURL</Link></li>
                    <li><Link to="/custom">Custom</Link></li>
                </ul>
                <ul className="mu-nav-bar mv-nav-bar-right">
                    <li><Link to="/about">About</Link></li>
                </ul>
            </header>
        );
    }
}

export default Header;
