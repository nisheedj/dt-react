import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DataTable from 'datatables.net';
import scroller from 'datatables.net-scroller';
import colreorder from 'datatables.net-colreorder';

$.fn.DataTable = DataTable;

class DtAdapter extends React.Component {
  constructor() {
    super();
    this.dtTable = null;
    this.dtInstance = null;
  }
  createBaseTable() {
    this.dtTable = document.createElement('table');
    let thead = document.createElement('thead');
    let theadRow = document.createElement('tr');

    this.dtTable.setAttribute('colspacing', '0');
    this.dtTable.setAttribute('width', '100%');
    this.dtTable.className = 'dt-table';

    this.createTableHeaders(theadRow);
    thead.appendChild(theadRow);
    this.dtTable.appendChild(thead);
    ReactDOM.findDOMNode(this).appendChild(this.dtTable);
  }
  createTableHeaders(theadRow) {
    for (let i = 0; i < this.props.columns.length; i++) {
      let th = document.createElement('th');
      let col = this.props.columns[i];
      if (col.headerTemplate && typeof col.headerTemplate === 'function') {
        col.headerTemplate.apply(this, [th, col]);
      } else {
        th.textContent = col.title || 'No Title!';
      }
      theadRow.appendChild(th);
    };
  }
  cleanUpDOM() {
    //Cleanup
    this.dtTable = null;
    let adapterNode = ReactDOM.findDOMNode(this);
    while (adapterNode.firstChild) {
      adapterNode.removeChild(adapterNode.firstChild);
    };
  }
  headerCallback(thead, data, start, end, display) {
    // Header callback
  }
  initializeTable() {
    try {
      this.dtInstance = $(this.dtTable).DataTable({
        //Options
        dom: 't',
        data: this.props.data,
        columns: this.props.columns,
        scrollY: 800,
        scrollX: true,
        deferRender: true,
        scroller: {
          displayBuffer: 3
        },
        colReorder: true,
        ordering: false,
        //Callbacks
        headerCallback: this.headerCallback
      });
    } catch (e) {
      console.log('There was an error initializing the table');
      console.log(e);
      this.cleanUpDOM();
    }
  }
  componentWillReceiveProps(nextProps) {
    //Process new props here
    //Note: DO NOT USE "this.setState()"
  }
  componentDidMount() {
    this.createBaseTable();
    this.initializeTable();
  }
  render() {
    return (
      <div className="dt-adapter"></div>
    );
  }
};

DtAdapter.defaultProps = {
  data: [],
  columns: []
}

export {
  DtAdapter
};
