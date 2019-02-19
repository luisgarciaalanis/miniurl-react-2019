import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { routes } from '../../Routes';

class Header extends React.Component<RouteComponentProps> {
    render() {
        const path = this.props.location.pathname;
        console.log(path);
        return (
            <header className="header">
                <ul className="mu-nav-bar">
                    <li className={path === routes.Home ? 'active' : ''}><Link to={routes.Home}>MiniURL</Link></li>
                    <li className={path === routes.Custom ? 'active' : ''}><Link to={routes.Custom}>Custom</Link></li>
                </ul>
                <ul className="mu-nav-bar mv-nav-bar-right">
                    <li className={path === routes.About ? 'active' : ''}><Link to={routes.About}>About</Link></li>
                </ul>
            </header>
        );
    }
}

export default Header;
