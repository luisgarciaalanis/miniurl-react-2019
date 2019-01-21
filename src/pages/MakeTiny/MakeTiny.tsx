import * as React from 'react';

class MakeTiny extends React.Component {
    public render() {
        return (
            <div>
                Make tiny!
                <label htmlFor="urlinput">Enter a URL</label>
                <input type="text" name="urlinput" id="urlinput" />
                <input type="button" value="Make tiny" />
                <div>
                    <span>MiniURL was created:</span>
                    <span><a href="http://www.google.com/">http://www.google.com/</a></span>
                </div>
            </div>
        );
    }
}

export default MakeTiny;
