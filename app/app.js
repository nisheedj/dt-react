import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import {
  DtAdapter
}
from './components/DtAdapter';

let data = [];

let cols = [];

class HeaderCell extends React.Component {
  clickHandler(e) {
    console.log(this.props.data);
  }
  render() {
    return <div onClick={this.clickHandler.bind(this)}>{this.props.text}</div>
  }
}
HeaderCell.defaultProps = {
  text: 'No Title'
};


for (var i = 0; i < 40; i++) {
  if (i === 0) {
    cols.push({
      targets: i,
      width: 200,
      headerTemplate: function(th, col) {
        th.innerHTML = '<input type="checkbox" name="test"/>';
      },
      render:function(){
        return '<input type="checkbox" name="test"/>';
      }
    });
  } else {
    cols.push({
      targets: i,
      width: 200,
      headerTemplate: function(th, col) {
        ReactDOM.render(<HeaderCell data={col} text={'Header ' + (col.targets + 1)}/>, th);
      }
    });
  }
};

for (var i = 0; i < 10000; i++) {
  data[i] = [];
  for (var j = 0; j < cols.length; j++) {
    if (j === 0) {
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
