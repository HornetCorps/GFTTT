import React from 'react';
import './pages/buildCharacter.css'

export default class ExportButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fileType: "json",
            fileDownloadUrl: null,
            status: "",
        }
        this.download = this.download.bind(this);
    }

    download (event) {
        event.preventDefault();
        let output = JSON.stringify({character: this.props.data},
            null, 4);

        // Download it
        const blob = new Blob([output]);
        const fileDownloadUrl = URL.createObjectURL(blob);
        this.setState ({fileDownloadUrl: fileDownloadUrl},
            () => {
                this.dofileDownload.click();
                URL.revokeObjectURL(fileDownloadUrl);  // free up storage--no longer needed.
                this.setState({fileDownloadUrl: ""})
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.download} class='cancelButton'>
                    Export File
                </button>

                <a className="hidden"
                    download={this.props.data.name ? this.props.data.name+".json": "data.json"}
                    href={this.state.fileDownloadUrl}
                    ref={e => this.dofileDownload = e}
                    />
            </div>
        )
    }
}
