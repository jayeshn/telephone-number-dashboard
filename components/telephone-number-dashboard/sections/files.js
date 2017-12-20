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

    render() {
        console.log('render: FilesDetailSection');
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm">
                        <FileList files={this.props.files}/>
                        <NumberList files={this.props.files} selIndex={this.state.selectedIndex}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilesSection;
