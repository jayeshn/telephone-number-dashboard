import React from 'react';
import OperationList from './operation-list'
import OperationDetails from './operation-details'

class OperationsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex:-1
        };
    }

    componentWillMount() {
//        console.log('componentWillMount: OperationsSection');
    }

    componentWillUpdate() {
//        console.log('componentWillUpdate: OperationsSection');
    }

    componentWillReceiveProps() {
//        console.log('componentWillReceiveProps: OperationsSection');
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
//        console.log('render: OperationsSection');
        return (
            <div className="well well-sm">
                <div className="well well-sm">
                    <OperationList onOperationSelect={this.handleOperationSelect.bind(this)} operations={this.props.operations}/>
                </div>
                <div className="well well-sm">
                    <OperationDetails  operations={this.props.operations} selIndex={this.state.selectedIndex}/>
                </div>
            </div>
        );
    }
}

export default OperationsSection;
