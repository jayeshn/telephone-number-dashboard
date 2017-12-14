import React from 'react';
import TelephoneNumberDashboard from './pages/telephone-number-dashboard/telephone-number-dashboard';
import './lib/3rdparty/bootstrap/css/bootstrap.min.css';
import './lib/app/css/flexbox.css'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TelephoneNumberDashboard/>
      </div>
    );
  }
}

export default App;
