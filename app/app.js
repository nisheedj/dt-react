import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import {
  DtAdapter
}
from './components/DtAdapter';

import dataSet from './sample-data/sample-1.js';

let dataDefs = dataSet.defaultData.items;

let colDefs = [{
  "title": "Base Measures ID",
  "targets": 0
}, {
  "title": "Division Name",
  "targets": 1
}, {
  "title": "Quarter Name",
  "targets": 2
}, {
  "title": "State Name",
  "targets": 3
}, {
  "title": "Base Price",
  "targets": 4
}, {
  "title": "Price Final",
  "targets": 5
}];

class App extends React.Component {
  render() {
    return <div className="dt-app"><DtAdapter columns={colDefs} data={dataDefs}/></div>
  }
}

let dtApp = document.getElementById('dt-app');

ReactDOM.render(<App/>, dtApp);
