import * as React from 'react';
import Header from '../Header/Header';
import { RouteComponentProps, withRouter } from 'react-router';

class AppFrame extends React.Component<RouteComponentProps> {
    public render() {
        return (
            <div>
                <Header {...this.props} />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default withRouter(AppFrame);
