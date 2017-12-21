import React from 'react';
import OperationList from './operation-list'
import OperationDetails from './operation-details'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class OperationsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex:-1
        };
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

    handleOperationSelect(row) {
      let operations = this.props.operations;
      for(var i = 0;i < operations.length; i++) {
        if (operations[i].name === row.name) {
          this.setState({"selectedIndex":i});
        }
      }
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
                            <OperationList onOperationSelect={this.handleOperationSelect.bind(this)} operations={this.props.operations}/>
                            <OperationDetails  operations={this.props.operations} selIndex={this.state.selectedIndex}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OperationsSection;
