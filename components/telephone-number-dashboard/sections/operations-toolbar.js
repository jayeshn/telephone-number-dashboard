import React from 'react';

class OperationsToolbar extends React.Component {
    componentWillMount() {
//        console.log('componentWillMount: OperationsToolbar');
    }

    componentWillUpdate() {
//        console.log('componentWillUpdate: OperationsToolbar');
    }

    componentWillReceiveProps() {
//        console.log('componentWillReceiveProps: OperationsToolbar');
    }

    onRowSelect(row, isSelected, e) {
      this.props.onFileSelect(row);
    }

    handleAdd911Details(e) {
        e.preventDefault();
        console.log('Clicked ');
        this.props.onAddOperation('911');
    }

    handleSetupTrunk(e) {
        e.preventDefault();
        console.log('Clicked ');
        this.props.onAddOperation('trunk-call');
    }

    handleSetupCallForward(e) {
        e.preventDefault();
        console.log('Clicked ');
        this.props.onAddOperation('call-forward');
    }

    render() {
//        console.log('render: OperationsToolbar');
        return (
            <div className="row">
                <div className="col-md-12">
                    <ul>
                        <li><a onClick={this.handleAdd911Details.bind(this)}>911 Address Details</a></li>
                        <li><a onClick={this.handleSetupTrunk.bind(this)}>Trunk Call</a></li>
                        <li><a onClick={this.handleSetupCallForward.bind(this)}>Call Forward</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default OperationsToolbar;
