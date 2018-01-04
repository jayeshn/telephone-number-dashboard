import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';

class OperationDetails extends React.Component {
    componentWillMount() {
//        console.log('componentWillMount: OperationsSection');
    }

    componentWillUpdate() {
//        console.log('componentWillUpdate: OperationsSection');
    }

    componentWillReceiveProps() {
//        console.log('componentWillReceiveProps: OperationsSection');
    }

    getOperationDetails() {
      if (this.props.selIndex > -1) {
        return JSON.stringify(this.props.operations[this.props.selIndex].details);
      }

      return 'No operation selected.';
    }

    getAffectedNumbers() {
      if (this.props.selIndex > -1) {
        return this.props.operations[this.props.selIndex].numbers.map(n => (
        <li>{n.number}</li>
        ));
      }

      return 'No operation selected.';
    }

    callback = function(key){

    }

    render() {
//        console.log('render: OperationsSection');
        return (
                <Tabs
                  defaultActiveKey="2"
                  onChange={this.callback}
                  renderTabBar={()=><ScrollableInkTabBar />}
                  renderTabContent={()=><TabContent />}
                  >
                  <TabPane tab='Details' key="1">
                    <div>
                      {this.getOperationDetails()}
                    </div>
                  </TabPane>
                  <TabPane tab='Numbers' key="2">
                    <div>
                      {this.getAffectedNumbers()}
                    </div>
                  </TabPane>
                </Tabs>
        );
    }
}

export default OperationDetails;
