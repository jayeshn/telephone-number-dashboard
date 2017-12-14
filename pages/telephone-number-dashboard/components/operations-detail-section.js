import React from 'react';
import OperationsSection from './operations-section'

class OperationsDetailSection extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        console.log('componentWillMount: OperationsDetailSection');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate: OperationsDetailSection');
    }
    
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps: OperationsDetailSection');
    }

    render() {
        console.log('render: OperationsDetailSection');
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm">
                        <OperationsSection data={this.props.data}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default OperationsDetailSection;