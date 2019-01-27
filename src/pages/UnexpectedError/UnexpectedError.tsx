import * as React from 'react';

class UnexpectedError extends React.Component {
    public render() {
        return (
            <div className="unexpected-error">
                <div className="error-msg-box">An unexpected error has occurred!</div>
            </div>
        );
    }
}

export default UnexpectedError;
