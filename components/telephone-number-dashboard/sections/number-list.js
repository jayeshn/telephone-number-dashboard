import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class NumbersSection extends React.Component {
    constructor(props) {
        super(props);

        this.state={numbers:[]};
        this.num = [];
        this.selectedNumbers = [];
    }

    componentWillMount() {
//        console.log('componentWillMount: NumbersSection');
            this.updateState(this.props);
    }

    componentWillUpdate(nextProps, nextState) {
//        console.log('componentWillUpdate: NumbersSection');
    }

    componentWillReceiveProps(nextProps) {
//        console.log('componentWillReceiveProps: NumbersSection');
        this.updateState(nextProps);
    }

    updateState(nextProps) {
        if (nextProps.selIndex == -1) {
            for(var i = 0;i < nextProps.files.length; i++) {
                this.num = this.num.concat(nextProps.files[i].numbers);
            }
        } else {
            this.num = [].concat(nextProps.files[nextProps.selIndex].numbers);
        }

        this.setState({"numbers":this.num});
    }

    handleClick() {
        this.props.onHide(this.selectedNumbers);
    }
    
    onRowSelect(row, isSelected, e) {
        if (isSelected) {
            this.selectedNumbers.push(row);
        } else {
            const index = this.selectedNumbers.indexOf(row);

            if (index !== -1) {
                this.selectedNumbers.splice(index, 1);
            }
        }
        console.log(this.selectedNumbers);
    }
    
    render() {
//        console.log('render: NumbersSection');
        const selectRowProp = this.props.selectAllowed ? {
            mode: 'checkbox',
            bgColor: 'aquamarine',
            clickToSelect: true,
            hideSelectColumn: true,
            onSelect: this.onRowSelect.bind(this)
          } : {};

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <div className="panel-title">Numbers</div>
                        </div>
                        <div className="panel-body">
                            <BootstrapTable selectRow={ selectRowProp }
                              data={this.state.numbers}
                              striped
                              hover
                              pagination
                              search
                              options={ { noDataText: 'No numbers available yet.' } }>
                                <TableHeaderColumn dataField="number" isKey dataSort>Number</TableHeaderColumn>
                            </BootstrapTable>
                            <button onClick={this.handleClick.bind(this)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NumbersSection;
