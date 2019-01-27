import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import MinifyResultOverlay from '../../components/MinifyResultOverlay/MinifyResultOverlay';
import minifyUrl from '../../usecases/minifyUrl';
import { routes } from '../../Routes';

/**
 * MakeTiny state interface.
 */
interface MakeTinyState {
    showResults: boolean;
    url: string;
    alias: string;
    hash: string;
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
        hash: '',
    }

    /**
     * Handles the click event on the tinify button.
     */
    private async onTinifyClicked() {
        if (this.state.url) {
            try {
                const hash = await minifyUrl(this.state.url);
                this.setState({
                    showResults: true,
                    hash,
                });
            } catch (e) {
                this.props.history.push(routes.UnexpectedError);
            }
        }
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

                <div className="form-group-search">
                    <input
                        type="text"
                        name="urlinput"
                        placeholder="Enter a URL"
                        onChange={this.onUrlInputChange}
                        value={this.state.url}
                        maxLength={2083}
                    />
                    <button onClick={this.onTinifyClicked}>Tinify</button>
                </div>
                <p className="custom-text">Create <Link to="/custom">Custom URL</Link></p>
                <MinifyResultOverlay onClose={this.onOverlayClosed} visible={this.state.showResults} originalUrl={this.state.url} hash={this.state.hash} />
            </div >
        );
    }
}

export default MakeTiny;
