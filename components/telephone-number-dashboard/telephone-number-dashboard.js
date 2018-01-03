import React from 'react';
import FilesSection from './sections/files';
import OperationsSection from './sections/operations';
import OperationsToolbar from './sections/operations-toolbar'
import * as RestService from '../../utilities/rest-utilities';
import FineUploaderTraditional from 'fine-uploader-wrappers'
import Gallery from 'react-fine-uploader'
import 'react-fine-uploader/gallery/gallery.css'
import NumberList from './sections/number-list'
import Modal from '../common/modal'

class TelephoneNumberDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            files:[],
            operations:[]
        };
    }

    componentWillMount() {
//        console.log('componentWillMount: TelephoneNumberDashboard');
    }

    componentWillUpdate() {
//        console.log('componentWillUpdate: TelephoneNumberDashboard');
    }

    loadDetails() {
        let fileListRequest = this.createFileListRequest();
		let self = this;
		RestService.post('services/file/list', fileListRequest).then(function(fileListResponse) {
			let files = fileListResponse.results;
			self.setState({"files":files});
		},function(fileListResponse) {
			//alert('error');
            self.setState({"files":[
                                {"name":"ASR_141217_001", "numbers":[{"number":"856-001-0001"}, {"number":"856-001-0002"}]},
                                {"name":"ASR_141217_002", "numbers":[{"number":"856-002-0001"}, {"number":"856-002-0002"}]},
                                {"name":"ASR_141217_003", "numbers":[{"number":"856-003-0001"}, {"number":"856-003-0002"}]}
                            ],
                            "operations":[
                                {"name":"tc-001", "type":"trunk-call", "numbers":[{"number":"856-001-0001"}, {"number":"856-001-0002"}], "details":{"tc-num":"856-001-0000"}},
                                {"name":"911-001", "type":"911", "numbers":[{"number":"856-003-0001"}, {"number":"856-003-0002"}], "details":{"address":"2 Logan Square", "city":"Philadelphia", "state":"PA", "zipcode":"19130"}},
                                {"name":"cf-001", "type":"call-forward", "numbers":[{"number":"856-002-0001"}, {"number":"856-002-0002"}], "details":{"cf-num":"856-002-0000"}},
                            ]
                          });
		});
    }

    createFileListRequest() {

    }

    onFileUploadComplete(name) {
        console.log(name);
    }


    handleAddOperation(operationType) {
        let operations = this.state.operations;
        operations.push({"name":"Untitled", "type":operationType, "numbers":[], "details":{}});
        console.log(operations);
        this.setState({"operations":operations, "showModal":true});
        
        switch(operationType) {
            case 'trunk-call':
                console.log('trunk-call');
                break;
            case '911':
                console.log('911');
                break;
            case 'call-forward':
                console.log('call-forward');
                break;
            default:
                break;
        }
    }

    handleHide(numbers) {
        let operations = this.state.operations;
        operations[operations.length - 1].numbers=numbers;
        console.log(operations[operations.length - 1]);
        this.setState({"operations":operations, "showModal":false});
        
    }

    render() {
//        console.log('render: TelephoneNumberDashboard');
        var self = this;
        const uploader = new FineUploaderTraditional({
          options: {
              chunking: {
                  enabled: true
              },
              deleteFile: {
                  enabled: true,
                  endpoint: 'http://localhost:3001/uploads'
              },
              request: {
                  endpoint: 'http://localhost:3001/uploads',
                  method: 'POST'
              },
              cors: {
                //all requests are expected to be cross-domain requests
                expected: true,

                //if you want cookies to be sent along with the request
                // sendCredentials: true
              },
              retry: {
                  enableAuto: true
              },
              callbacks: {
                onError: function(id, name, errorReason, xhrOrXdr) {
                    alert("Error on file number {} - {}.  Reason: {}");
                },
                onComplete: function(id, name, responseJSON, xhr) {
                    self.onFileUploadComplete(name);
                }
              }
          }
});

        const modal = this.state.showModal ? (
            <Modal x={this.state.x} y={this.state.y}>
                <NumberList selectAllowed={true} onHide={this.handleHide.bind(this)} files={this.state.files} selIndex={-1}/>
            </Modal>
            ) : null;

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <div className="panel-title">Files</div>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="well well-sm">
                                            <Gallery uploader={ uploader } />
                                        </div>
                                        <div className="well well-sm">
                                            <FilesSection files={this.state.files}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <div className="panel-title">Operations</div>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div id="modal-root" className="well well-sm">
                                            <OperationsToolbar onAddOperation={this.handleAddOperation.bind(this)}/>
                                        </div>
                                        {modal}
                                        <OperationsSection operations={this.state.operations}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
//        console.log('componentDidMount: TelephoneNumberDashboard');
        this.loadDetails();
    }
}

export default TelephoneNumberDashboard;
