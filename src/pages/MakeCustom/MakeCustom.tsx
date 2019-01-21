import * as React from 'react';

class MakeCustom extends React.Component {
    public render() {
        return (
            <div>
                Make custom!
                <label htmlFor="urlinput">Enter a URL</label>
                <input type="text" name="urlinput" id="urlinput" />
                <label htmlFor="hash">Enter alias</label>
                <input type="text" name="hash" id="hash" />
                <input type="button" value="Make tiny" />
                <div>
                    <span>MiniURL was created:</span>
                    <span><a href="http://www.google.com/">http://www.google.com/</a></span>
                </div>
            </div>
        );
    }
}

export default MakeCustom;
