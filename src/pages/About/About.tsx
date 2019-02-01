import * as React from 'react';

class About extends React.Component {
    public render() {
        return (
            <div className="about-page">
                <div className="msg-box">
                    <h2>About this page!</h2>
                    <p>This page is a tech demo intended to mimic <a href="https://tinyurl.com">https://tinyurl.com</a> like functionality</p>
                </div>
            </div>
        );
    }
}

export default About;
