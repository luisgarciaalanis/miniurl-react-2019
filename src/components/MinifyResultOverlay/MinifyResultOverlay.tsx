import * as React from 'react';

interface MinifyResultOverlayProps {
    onClose: () => void;
    visible: boolean;
    originalUrl: string;
    hash: string;
}

class MinifyResultOverlay extends React.Component<MinifyResultOverlayProps> {
    public render() {
        const miniUrl = `${document.location.origin}/${this.props.hash}`;
        return (
            <div className={this.props.visible ? "minify-result-overlay" : "hidden"}>
                <div className="overlay"></div>
                <div className="url-box">
                    <span className="close" onClick={this.props.onClose}><span></span></span>
                    <h3 className="text-legendary">MiniURL was created!</h3>

                    <span className="label">Original:</span>
                    <span className="old-url">{this.props.originalUrl}</span>

                    <span className="label">Try it now on new tab:</span>
                    <a className="new-url" href={miniUrl} target="_blank">{miniUrl}</a>
                </div>
            </div>
        );
    }
}

export default MinifyResultOverlay;
