import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import MinifyResultOverlay from '../../components/MinifyResultOverlay/MinifyResultOverlay';

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
        this.onOverlayClosed = this.onOverlayClosed.bind(this);
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
    private onOverlayClosed() {
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
                        maxLength={2083}
                    />
                    <div className="alias">
                        <label htmlFor="alias-input">http://m.garcia.tv/</label>
                        <input type="text" name="urlinput" placeholder="Enter Alias" maxLength={20} id="alias-input" />
                        <button>Tinify</button>
                    </div>
                </div>

                <p className="custom-text">Create  <Link to="/">Random URL</Link></p>
                <MinifyResultOverlay onClose={this.onOverlayClosed} visible={this.state.showResults} originalUrl="http://www.google.com" hash="kasjdh" />
            </div >
        );
    }
}

export default MakeTiny;
