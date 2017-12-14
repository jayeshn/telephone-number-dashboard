import React from 'react';
import UploadedFilesSection from './uploaded-files-section'
import NumbersSection from './numbers-section'

class FilesDetailSection extends React.Component {
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
                        <UploadedFilesSection data={this.props.data}/>
                        <NumbersSection data={this.props.data} selIndex={this.state.selectedIndex}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilesDetailSection;