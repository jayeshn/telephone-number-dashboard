import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class UploadFileSection extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('componentWillMount: UploadFileSection');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate: UploadFileSection');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps: UploadFileSection');
    }

    render() {
        console.log('render: UploadFileSection');
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <div className="panel-title">Uploaded Files</div>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <BootstrapTable
                                      data={this.props.files}
                                      striped
                                      hover
                                      pagination
                                      search
                                      options={ { noDataText: 'No files uploaded yet.' } }>
                                        <TableHeaderColumn dataField="name" isKey dataSort>Name</TableHeaderColumn>
                                    </BootstrapTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadFileSection;
