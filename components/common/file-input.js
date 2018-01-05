import React from 'react';

class FileInput extends React.Component {
    constructor(props) {
    super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleFileSubmit(this.fileInput.files[0].name);
    }

    handleChange(e) {
        e.preventDefault();
        this.props.handleFileSubmit(this.fileInput.files[0]);
    }

    render() {
        // Use a portal to render the children into the element
        return (
            <div>
                <input type="file" id="fileElem" multiple accept="image/*" style={{"display":"none"}} onChange={this.handleChange.bind(this)} ref={input => { this.fileInput = input; }}/>
                <label htmlFor="fileElem">Upload CSR <span className="glyphicon glyphicon-upload"></span></label>
            </div>    
        );
    }
}

export default FileInput;

