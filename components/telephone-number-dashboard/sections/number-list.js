import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class NumbersSection extends React.Component {
    constructor(props) {
        super(props);

        this.state={numbers:[]}
        this.num = []
    }

    componentWillMount() {
        console.log('componentWillMount: NumbersSection');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate: NumbersSection');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps: NumbersSection');
        this.updateState(nextProps);
    }

    updateState(nextProps) {
        if (nextProps.selIndex == -1) {
            for(var i = 0;i < nextProps.files.length; i++) {
                this.num = this.num.concat(nextProps.files[i].numbers);
            }
        } else {
            this.num = nextProps.files[this.props.selIndex];
        }

        this.setState({"numbers":this.num});
    }

    pushNumbers(item, index) {

    }

    render() {
        console.log('render: NumbersSection');
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <div className="panel-title">Numbers</div>
                        </div>
                        <div className="panel-body">
                            <BootstrapTable
                              data={this.state.numbers}
                              striped
                              hover
                              pagination
                              search
                              options={ { noDataText: 'No numbers available yet.' } }>
                                <TableHeaderColumn dataField="number" isKey dataSort>Number</TableHeaderColumn>
                            </BootstrapTable>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NumbersSection;
