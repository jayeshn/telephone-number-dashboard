import React from 'react';
import Modeless from '../../common/modeless'

class OperationsToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "showAddMenu": false,
            "showSetupMenu": false,
            x:-1,
            y:-1
        }
    }

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
        this.setState({"showAddMenu":false});
        this.props.onAddOperation('911');
    }

    handleSetupTrunk(e) {
        e.preventDefault();
        this.setState({"showSetupMenu":false});
        this.props.onAddOperation('trunk-call');
    }

    handleSetupCallForward(e) {
        e.preventDefault();
        this.setState({"showSetupMenu":false});
        this.props.onAddOperation('call-forward');
    }

    handleAddClick(e) {
        let coord = this.getCoordinates('add-button');
        
        this.setState({"showSetupMenu":false,"showAddMenu":!this.state.showAddMenu, "x": coord.x, "y": coord.y});
    }

    handleSetupClick(e) {
        let coord = this.getCoordinates('setup-button');

        this.setState({"showAddMenu":false,"showSetupMenu":!this.state.showSetupMenu, "x": coord.x, "y": coord.y});
    }

    getCoordinates(id) {
        let buttonEl = document.getElementById(id);
        let x = buttonEl.offsetLeft + buttonEl.offsetWidth;
        let y = buttonEl.offsetTop + buttonEl.offsetHeight / 2;
        
        return {"x":x, "y":y};
    }

    render() {
//        console.log('render: OperationsToolbar');
        const addContextMenu = this.state.showAddMenu ? (
            <Modeless root="add-root" x={this.state.x} y={this.state.y}>
                <div className="menu">
                    <div className="menu-item" onClick={this.handleAdd911Details.bind(this)}>
                        911 Address Details
                    </div>
                </div>
            </Modeless>
            ) : null;

        const setupContextMenu = this.state.showSetupMenu ? (
            <Modeless root="setup-root" x={this.state.x} y={this.state.y}>
                <div className="menu">
                    <div className="menu-item" onClick={this.handleSetupTrunk.bind(this)}>
                        Trunk Call
                    </div>
                    <div className="menu-item" onClick={this.handleSetupCallForward.bind(this)}>
                        Call Forward
                    </div>
                </div>
            </Modeless>
            ) : null;
        
        return (
                <div>
                    <div id="add-root"><button id="add-button" className="btn btn-primary" onClick={this.handleAddClick.bind(this)}>Add <span className="glyphicon glyphicon-menu-right"></span></button>{addContextMenu}</div>
                    <div id="setup-root"><button id="setup-button" className="btn btn-primary" onClick={this.handleSetupClick.bind(this)}>Setup <span className="glyphicon glyphicon-menu-right"></span></button>{setupContextMenu}</div>
                    
                    
                </div>
        );
    }
}

export default OperationsToolbar;
