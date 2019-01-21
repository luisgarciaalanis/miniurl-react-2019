import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

/**
 * MakeTiny state interface.
 */
interface MakeTinyState {
    showResults: boolean;
    url: string;
    alias: string;
}

class MakeTiny extends React.Component<RouteComponentProps<{}>, MakeTinyState> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);

        this.onTinifyClicked = this.onTinifyClicked.bind(this);
        this.onUrlInputChange = this.onUrlInputChange.bind(this);
        this.onCloseResultsClicked = this.onCloseResultsClicked.bind(this);
    };

    /**
     * state of the component.
     */
    public readonly state: Readonly<MakeTinyState> = {
        showResults: false,
        url: '',
        alias: '',
    }

    /**
     * Handles the click event on the tinify button.
     */
    private onTinifyClicked() {
        console.log('tinify clicked!')
    }

    /**
     * Handles the input change on the url textbox.
     */
    private onUrlInputChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            url: e.currentTarget.value,
        });
    }

    /**
     * Overlay close button clicked.
     */
    private onCloseResultsClicked() {
        this.setState({
            showResults: false,
        });
    }

    public render() {
        return (
            <div className="make-tiny">
                <h1>MiniURL</h1>

                <div className="form-group-search with-alias">
                    <input
                        type="text"
                        name="urlinput"
                        placeholder="Enter a URL"
                        onChange={this.onUrlInputChange}
                        value={this.state.url}
                    />
                    <div className="alias">
                        <label htmlFor="alias-input">http://m.garcia.tv/</label>
                        <input type="text" name="urlinput" placeholder="Enter Alias" id="alias-input" />
                        <button>Tinify</button>
                    </div>
                </div>

                <p className="custom-text">Create  <Link to="/">Random URL</Link></p>

                <div className={this.state.showResults ? 'miniurl-created' : 'hidden'}>
                    <div className="overlay"></div>
                    <div className="url-box">
                        <span className="close" onClick={this.onCloseResultsClicked}><span></span></span>
                        <h3 className="text-legendary">MiniURL was created!</h3>

                        <span className="label">Original:</span>
                        <span className="old-url">http://www.luizer.com/saludos/tipo1/holaholacarambola</span>

                        <span className="label">Try it now:</span>
                        <a className="new-url" href="www.google.com">http://m.garcia.tv/asdd</a>
                    </div>
                </div>
            </div >
        );
    }
}

export default MakeTiny;
