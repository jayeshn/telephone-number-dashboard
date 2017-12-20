import React from 'react';
import FilesSection from './sections/files';
import OperationsSection from './sections/operations';
import * as RestService from '../../utilities/rest-utilities';

class TelephoneNumberDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            files:[],
            operations:[]
        };
    }

    componentWillMount() {
        console.log('componentWillMount: TelephoneNumberDashboard');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate: TelephoneNumberDashboard');
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
                                {"name":"ASR_141217_001", "numbers":[{"number":"856-001-0001"}, {"number":"856-001-0002"}]}, {"name":"ASR_141217_002", "numbers":[{"number":"856-002-0001"}, {"number":"856-002-0002"}]}, {"name":"ASR_141217_003", "numbers":[{"number":"856-003-0001"}, {"number":"856-003-0002"}]}
                            ],
                            "operations":[
                                {"name":"ASR_141217_001", "numbers":[{"number":"856-001-0001"}, {"number":"856-001-0002"}]}, {"name":"ASR_141217_002", "numbers":[{"number":"856-002-0001"}, {"number":"856-002-0002"}]}, {"name":"ASR_141217_003", "numbers":[{"number":"856-003-0001"}, {"number":"856-003-0002"}]}
                            ]
                          });
		});
    }

    createFileListRequest() {

    }

    render() {
        console.log('render: TelephoneNumberDashboard');
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm">
                        <div className="well well-sm">
                            <button className="btn btn-md btn-warning">Upload <span className="glyphicon glyphicon-upload"></span></button>
                        </div>
                        <FilesSection files={this.state.files}/>
                        <OperationsSection operations={this.state.operations}/>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount: TelephoneNumberDashboard');
        this.loadDetails();
    }
}

export default TelephoneNumberDashboard;
