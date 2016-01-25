import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import {
  DtAdapter
}
from './components/DtAdapter';

let data = [];

let cols = [];

for (var i = 0; i < 30; i++) {
  cols.push({
    title: 'Header ' + (i + 1),
    targets: i,
    width: 200
  });
};

for (var i = 0; i < 10000; i++) {
  data[i] = [];
  for (var j = 0; j < cols.length; j++) {
    if(j === 0){
      data[i][j] = i + 1;
    } else {
      data[i][j] = 'Text Header' + (j + 1);
    }
  };
};

class App extends React.Component {
  render() {
    return <div className="dt-app"><DtAdapter columns={cols} data={data}/></div>
  }
}

let dtApp = document.getElementById('dt-app');

ReactDOM.render(<App/>, dtApp);
