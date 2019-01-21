import * as React from 'react';
import Header from '../Header/Header';

class AppFrame extends React.Component {
    public render() {
        return (
            <div>
                <Header />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AppFrame;
