import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class UploadFileSection extends React.Component {
    componentWillMount() {
//        console.log('componentWillMount: UploadFileSection');
    }

    componentWillUpdate() {
//        console.log('componentWillUpdate: UploadFileSection');
    }

    componentWillReceiveProps() {
//        console.log('componentWillReceiveProps: UploadFileSection');
    }

    onRowSelect(row, isSelected, e) {
      this.props.onFileSelect(row, e.nativeEvent.layerX, e.nativeEvent.layerY);
    }

    render() {
      const selectRowProp = {
        mode: 'checkbox',
        clickToSelect: true,
        hideSelectColumn: true,
        onSelect: this.onRowSelect.bind(this)
      };

//        console.log('render: UploadFileSection');
        return (
                   
                                    <BootstrapTable
                                      data={this.props.files}
                                      selectRow={ selectRowProp }
                                      striped
                                      hover
                                      pagination
                                      search
                                      options={ { noDataText: 'No files uploaded yet.' } }>
                                        <TableHeaderColumn dataField="name" isKey dataSort>Name</TableHeaderColumn>
                                    </BootstrapTable>
        );
    }
}

export default UploadFileSection;
