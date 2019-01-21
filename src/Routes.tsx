import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppFrame from './components/AppFrame/AppFrame';
import MakeTiny from './pages/MakeTiny/MakeTiny';
import About from './pages/About/About';
import MakeCustom from './pages/MakeCustom/MakeCustom';

const history = createBrowserHistory();

/**
 * Application routes.
 */
const routes = {
    Home: '/',
    Custom: '/custom',
    About: '/about',
};

class Routes extends React.Component {
    public render() {
        return (
            <HashRouter>
                <Route exact path="/" >
                    <AppFrame>
                        <Switch>
                            <Route exact path={routes.Home} component={MakeTiny} />
                            <Route exact path={routes.Custom} component={MakeCustom} />
                            <Route exact path={routes.About} component={About} />
                        </Switch>
                    </AppFrame>
                </Route>
            </HashRouter>
        );
    }
}

export default Routes;
export { history };