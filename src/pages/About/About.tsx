import * as React from 'react';

class About extends React.Component {
    public render() {
        return (
            <div className="about-page">
                <div className="msg-box">
                    <h2>About this page!</h2>
                    <br />
                    <p>This page is a tech demo intended to mimic <a href="https://tinyurl.com">https://tinyurl.com</a> like functionality.</p>
                    <p>MiniURL was developed as two micro services:</p>
                    <div className="info-box">
                        <h3>BACKEND</h3>
                        <ol>
                            <li>NodeJS ES6</li>
                            <li>HapiJS web framework</li>
                            <li>Sequelize for DB access and migration</li>
                            <li>MySQL database</li>
                            <li>Docker for deployment</li>
                            <li>Opctl for portable development environment</li>
                        </ol>
                    </div>
                    <div className="info-box">
                        <h3>FRONTEND</h3>
                        <ul>
                            <li>React</li>
                            <li>Typescript</li>
                            <li>Nginx (serving/reverse proxy)</li>
                            <li>Docker for deployment</li>
                            <li>Opctl portable dev environment</li>
                        </ul>
                    </div>
                    <div className="info-box">
                        <h3>DEPLOYMENT / CI</h3>
                        <ul>
                            <li>Jenkins</li>
                            <li>Ubuntu</li>
                            <li>Docker</li>
                            <li>Opctl for container build and test</li>
                        </ul>
                    </div>
                    <div className="src-info">
                        <h2>Source code: </h2>
                        <div className="url-info">
                            <a href="https://github.com/luisgarciaalanis/miniurl-react">https://github.com/luisgarciaalanis/miniurl-react</a>(frontend)
                        </div>
                        <div className="url-info">
                            <a href="https://github.com/luisgarciaalanis/miniurl-node-svc">https://github.com/luisgarciaalanis/miniurl-node-svc</a>(backend)
                        </div>
                    </div>
                    <div className="how-run">
                        <h2>How to run:</h2>
                        <h3>On mac or linux you can run this local by doing the following:</h3>
                        <ol>
                            <li>Install Docker</li>
                            <li>Install git</li>
                            <li>Install <a href="https://opctl.io/docs/getting-started/opctl.html">Opctl</a></li>
                            <li>Disable MySQL service if installed (this service will spawn a Docker MySQL container).</li>
                            <li>open terminal 1</li>
                            <li>Run: git clone https://github.com/luisgarciaalanis/miniurl-node-svc</li>
                            <li>cd miniurl-node-svc</li>
                            <li>Run: opctl run debug
                                <ul>
                                    <li>It will ask for a DB password. This services spawns and seeds a MySQL database while the process is running.</li>
                                    <li>It will ask for a username for the database (root is not allowed).</li>
                                </ul>
                            </li>
                            <li>open terminal 2</li>
                            <li>Run: git clone https://github.com/luisgarciaalanis/miniurl-react</li>
                            <li>cd miniurl-node-react</li>
                            <li>Run: opctl run debug</li>
                            <li>Open http://localhost/ on a browser</li>
                            <li>Done!</li>
                            <li>To stop the local service Ctrl-C the terminals. This will kill the service and shutdown the database.</li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
