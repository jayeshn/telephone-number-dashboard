import React from 'react';
import FileList from './file-list'
import NumberList from './number-list'

class FilesSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex:-1
        };
    }

    componentWillMount() {
        console.log('componentWillMount: FilesDetailSection');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate: FilesDetailSection');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps: FilesDetailSection');
    }

    handleFileSelect(row) {
      let files = this.props.files;
      for(var i = 0;i < files.length; i++) {
        if (files[i].name === row.name) {
          this.setState({"selectedIndex":i});
        }
      }
      console.log(this.state);
    }

    render() {
        console.log('render: FilesDetailSection');
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm">
                        <FileList onFileSelect={this.handleFileSelect.bind(this)} files={this.props.files}/>
                        <NumberList files={this.props.files} selIndex={this.state.selectedIndex}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilesSection;
