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

    onRowSelect(row, isSelected, e) {
      this.props.onOperationSelect(row);
    }

    render() {
      const selectRowProp = {
        mode: 'checkbox',
        clickToSelect: true,
        hideSelectColumn: true,
        onSelect: this.onRowSelect.bind(this)
      };

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
                              selectRow={ selectRowProp }
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
