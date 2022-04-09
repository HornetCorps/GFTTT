import React from 'react';

export class ImportButton extends React.Component {
    constructor(props) {
        super(props)

        const defaultFileType = "json";
        this.fileNames = {
            json: "states.json",
            csv: "states.csv",
            text: "states.txt"
        }
        this.state = {
            fileType: defaultFileType,
            fileDownloadUrl: null,
            status: "",
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
        this.upload = this.upload.bind(this);
        this.openFile = this.openFile.bind(this);
    }

    upload(event) {
        event.preventDefault();
        this.dofileUpload.click()
    }

    /**
     * Process the file within the React app. We're NOT uploading it to the server!
     */
    openFile(evt) {
        let status = []; // Status output
        const fileObj = evt.target.files[0];
        const reader = new FileReader();

        let fileloaded = e => {
            // e.target.result is the file's content as text
            const fileContents = e.target.result;
            status.push(`File name: "${fileObj.name}". Length: ${fileContents.length} bytes.`);
            // Show first 80 characters of the file
            const first80char = fileContents.substring(0,80);
            status.push (`First 80 characters of the file:\n${first80char}`)
            this.setState ({status: status.join("\n")})
        }

        // Mainline of the method
        fileloaded = fileloaded.bind(this);
        reader.onload = fileloaded;
        reader.readAsText(fileObj);
    }

    render() {
        return (
            <div>
                <button onClick={this.upload}>
                    Import Data
                </button>

                <input type="file" className="hidden"
                       multiple={false}
                       accept=".json"
                       onChange={evt => this.openFile(evt)}
                       ref={e=>this.dofileUpload = e}
                />
            </div>
        )
    }
}