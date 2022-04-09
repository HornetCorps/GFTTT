import React from 'react';

export class ExportButton extends React.Component {

    constructor(data, props) {
        super(props);

        this.state = {
            fileType: "json",
            fileDownloadUrl: null,
            status: "",
            // Example data can be replaced with something else
            data: [
                { state: "Arizona",        electors: 11 },
                { state: "Florida",        electors: 29 },
                { state: "Iowa",           electors:  6 },
                { state: "Michigan",       electors: 16 },
                { state: "North Carolina", electors: 15 },
                { state: "Ohio",           electors: 18 },
                { state: "Pennsylvania",   electors: 20 },
                { state: "Wisconsin",      electors: 10 },
            ]
        }
        this.download = this.download.bind(this);
    }

    setData(data) {
        this.state.data = data;
    }

    download (event) {
        event.preventDefault();

        let output = JSON.stringify({states: this.state.data},
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
                <button onClick={this.download}>
                    Export File
                </button>

                <a className="hidden"
                    download={"data.json"}
                    href={this.state.fileDownloadUrl}
                    ref={e => this.dofileDownload = e}
                    />
            </div>
        )
    }
}