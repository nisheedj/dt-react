import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DataTable from 'datatables.net';
import scroller from 'datatables.net-scroller';

$.fn.DataTable = DataTable;

class DtAdapter extends React.Component {
  constructor() {
    super();
    this.dtTable = null;
    this.dtInstance = null;
  }
  createBaseTable() {
    this.dtTable = document.createElement('table');
    this.dtTable.setAttribute('colspacing', '0');
    this.dtTable.setAttribute('width', '100%');
    this.dtTable.className = 'dt-table';
    ReactDOM.findDOMNode(this).appendChild(this.dtTable);
  }
  initializeTable() {
    try {
      this.dtInstance = $(this.dtTable).DataTable({
        dom:'t',
        data: this.props.data,
        columnDefs: this.props.columns,
        scrollY: 900,
        deferRender: true,
        scroller: true
      });
    } catch (e) {
      console.log('There was an error initializing the table');
      console.log(e);
      //Cleanup
      ReactDOM.findDOMNode(this).removeChild(this.dtTable);
      this.dtTable = null;
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
