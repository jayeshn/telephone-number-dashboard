import React from 'react';
import ReactDOM from 'react-dom';
import FileList from './file-list'
import NumberList from './number-list'
import Modal from '../../common/modal'

class FilesSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex:-1,
            x:-1,
            y:-1
        };
    }

    componentWillMount() {
//        console.log('componentWillMount: FilesDetailSection');
    }

    componentWillUpdate() {
//        console.log('componentWillUpdate: FilesDetailSection');
    }

    componentWillReceiveProps() {
//        console.log('componentWillReceiveProps: FilesDetailSection');
    }

    handleFileSelect(row, x, y) {
      let files = this.props.files;
      for(var i = 0;i < files.length; i++) {
        if (files[i].name === row.name) {
          this.setState({"selectedIndex":i, "showModal":true, "x": x, "y": y});
        }
      }
      console.log(this.state);
    }

    handleHide() {
        this.setState({"showModal":false});
    }

    render() {
//        console.log('render: FilesDetailSection');
        const modal = this.state.showModal ? (
            <Modal x={this.state.x} y={this.state.y}>
                <NumberList selectAllowed={false} onHide={this.handleHide.bind(this)} files={this.props.files} selIndex={this.state.selectedIndex}/>
            </Modal>
            ) : null;
        
        return (
            <div className="row">
                <div id="modal-root" className="col-md-12" style={{"position":"relative", "zIndex": 1}}>
                    <FileList onFileSelect={this.handleFileSelect.bind(this)} files={this.props.files}/>
                    {modal}
                </div>
            </div>
        );
    }
}

export default FilesSection;
