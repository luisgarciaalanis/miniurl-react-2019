import * as React from 'react';
import { Link } from 'react-router-dom';

class MakeCustom extends React.Component {
    public render() {
        return (
            <div className="make-tiny">
                <h1>MiniURL</h1>

                <div className="form-group-search with-alias">
                    <input type="text" name="urlinput" placeholder="Enter a URL" />
                    <div className="alias">
                        <label htmlFor="alias-input">http://m.garcia.tv/</label>
                        <input type="text" name="urlinput" placeholder="Enter Alias" id="alias-input" />
                        <button>Tinify</button>
                    </div>
                </div>

                <p className="custom-text">Create <Link to="/">Random URL</Link></p>

                <div className="miniurl-created">
                    <div className="overlay"></div>
                    <div className="url-box">
                        <span className="close"><span></span></span>
                        <h3 className="text-legendary">MiniURL was created!</h3>

                        <span className="label">Original:</span>
                        <span className="old-url">http://www.luizer.com/saludos/tipo1/holaholacarambola</span>

                        <span className="label">Try it now:</span>
                        <a className="new-url" href="www.google.com">http://m.garcia.tv/asdd</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default MakeCustom;
