import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class OperationDetails extends React.Component {
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
                    <div className="panel-title">Operation Details</div>
                </div>
                <div className="panel-body">
                    Details
                </div>
            </div>
        );
    }
}

export default OperationDetails;
