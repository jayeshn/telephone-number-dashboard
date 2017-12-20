import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class OperationList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('componentWillMount: OperationsSection');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate: OperationsSection');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps: OperationsSection');
    }

    render() {
        console.log('render: OperationsSection');
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <div className="panel-title">Operation List</div>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <BootstrapTable
                              data={this.props.operations}
                              striped
                              hover
                              pagination
                              search
                              options={ { noDataText: 'No operations defined yet.' } }>
                                <TableHeaderColumn dataField="name" isKey dataSort>Name</TableHeaderColumn>
                            </BootstrapTable>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OperationList;
