import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class OperationList extends React.Component {
    componentWillMount() {
//        console.log('componentWillMount: OperationsSection');
    }

    componentWillUpdate() {
//        console.log('componentWillUpdate: OperationsSection');
    }

    componentWillReceiveProps() {
//        console.log('componentWillReceiveProps: OperationsSection');
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

//        console.log('render: OperationsSection');
        return (
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
        );
    }
}

export default OperationList;
