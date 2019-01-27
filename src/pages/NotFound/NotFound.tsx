import * as React from 'react';

class NotFound extends React.Component {
    public render() {
        return (
            <div className="not-found">
                <div className="error-msg-box">The URL was not found!</div>
            </div>
        );
    }
}

export default NotFound;
