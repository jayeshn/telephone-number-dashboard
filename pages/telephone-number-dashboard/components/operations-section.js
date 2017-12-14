import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class OperationsSection extends React.Component {
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
                    <div className="panel-title">Operations</div>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <BootstrapTable
                              data={this.props.data}
                              striped
                              hover
                              pagination
                              search
                              options={ { noDataText: 'No operations defined yet.' } }>
                                <TableHeaderColumn dataField="Operation" isKey dataSort>Number</TableHeaderColumn>
                            </BootstrapTable>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OperationsSection;