import React from 'react';

export const ImportButton = () => {

    /**
     * The file input onChange handler
     * Process the file within the React app. We're NOT uploading it to the server!
     */
    function openFile(evt) {
        let status = []; // Status output
        const fileObj = evt.target.files[0]; // We've not allowed multiple files.
        // See https://developer.mozilla.org/en-US/docs/Web/API/FileReader
        const reader = new FileReader();

        // Defining the function here gives it access to the fileObj constant.
        let fileloaded = e => {
            // e.target.result is the file's content as text
            // Don't trust the fileContents!
            // Test any assumptions about its contents!
            const fileContents = e;
            // status.push(`File name: "${fileObj.name}". `);
            // // Show first 80 characters of the file
            // const first80char = fileContents.substring(0,80);
            // status.push (`First 80 characters of the file:\n${first80char}`)
            // Show the status messages
            // this.setState ({status: status.join("\n")});
            // console.log(status)
        }

        // Mainline of the method
        fileloaded = fileloaded.bind(this);
        // The fileloaded event handler is triggered when the read completes
        reader.onload = fileloaded;
        reader.readAsText(fileObj); // read the file
    }

    return (
        <input type="file"
               multiple={false}
               accept=".zip, .json"
               onChange={evt => this.openFile(evt)}
        />
    )
};