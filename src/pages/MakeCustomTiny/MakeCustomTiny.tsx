import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import MinifyResultOverlay from '../../components/MinifyResultOverlay/MinifyResultOverlay';
import { StatusCodes, HttpError } from '../../core/http';
import { routes } from '../../Routes';
import minifyCustomUrl from '../../usecases/minifyCustomUrl';

/**
 * MakeTiny state interface.
 */
interface MakeTinyState {
    showResults: boolean;
    url: string;
    hash: string;
    errorMsg: string;
}

class MakeTiny extends React.Component<RouteComponentProps<{}>, MakeTinyState> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);

        this.onTinifyClicked = this.onTinifyClicked.bind(this);
        this.onUrlInputChange = this.onUrlInputChange.bind(this);
        this.onAliasInputChange = this.onAliasInputChange.bind(this);
        this.onOverlayClosed = this.onOverlayClosed.bind(this);
    };

    /**
     * state of the component.
     */
    public readonly state: Readonly<MakeTinyState> = {
        showResults: false,
        url: '',
        hash: '',
        errorMsg: '',
    }

    /**
     * Handles the click event on the tinify button.
     */
    private async onTinifyClicked() {
        if (this.state.url && this.state.hash) {
            try {
                const hash = await minifyCustomUrl(this.state.url, this.state.hash);
                this.setState({
                    showResults: true,
                    hash,
                    errorMsg: '',
                    url: '',
                });
            } catch (e) {
                let handled = false;
                if (e instanceof HttpError) {
                    if (e.status === StatusCodes.BadRequest) {
                        handled = true;
                        this.setState({
                            errorMsg: 'Invalid URL! Please try another one.',
                        });
                    }
                }

                if (!handled) {
                    this.props.history.push(routes.UnexpectedError);
                }
            }
        }
    }

    /**
     * Handles the input change on the url input box.
     */
    private onUrlInputChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            url: e.currentTarget.value,
        });
    }

    /**
     * Handles the input change on the alias input box.
     */
    private onAliasInputChange(e: React.FormEvent<HTMLInputElement>) {
        console.log(e.currentTarget.value);
        this.setState({
            hash: e.currentTarget.value,
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
                        <input
                            type="text"
                            name="urlinput"
                            placeholder="Enter Alias"
                            onChange={this.onAliasInputChange}
                            maxLength={20}
                            id="alias-input"
                        />
                        <button onClick={this.onTinifyClicked}>Tinify</button>
                        <div className={this.state.errorMsg ? 'error-msg' : 'hiden'}>{this.state.errorMsg}</div>
                    </div>
                </div>

                <p className="custom-text">Create  <Link to="/">Random URL</Link></p>
                <MinifyResultOverlay
                    onClose={this.onOverlayClosed}
                    visible={this.state.showResults}
                    originalUrl={this.state.url}
                    hash={this.state.hash}
                />
            </div >
        );
    }
}

export default MakeTiny;
