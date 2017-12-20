import React from 'react';
import OperationList from './operation-list'
import OperationDetails from './operation-details'
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
                            <OperationList operations={this.props.operations}/>
                            <OperationDetails />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OperationsSection;
