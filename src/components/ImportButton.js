import React from 'react';
import './pages/buildCharacter.css'

export default class ImportButton extends React.Component {
    constructor(props) {
        super(props)

        const defaultFileType = "json";
        this.fileNames = {
            json: "states.json",
            csv: "states.csv",
            text: "states.txt"
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
        const fileObj = evt.target.files[0];
        const reader = new FileReader();

        let fileloaded = e => {
            // e.target.result is the file's content as text
            const fileContents = e.target.result;
            this.props.importChar(fileContents);
        }

        // Mainline of the method
        fileloaded = fileloaded.bind(this);
        reader.onload = fileloaded;
        reader.readAsText(fileObj);
    }

    render() {
        return (
            <div data-testid="importButton">
                <button onClick={this.upload} class='cancelButton'>
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
