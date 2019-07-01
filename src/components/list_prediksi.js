import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
// import { Table, Button, Alert } from "react-bootstrap";

import { DataView, DataViewLayoutOptions } from "primereact/dataview";

export class ListPrediksi extends Component {
  constructor() {
    super();
    this.state = {
      dataTable: [],
      query: "",
      data: [],
      filteredData: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3210/view_sks").then(getdata => {
      this.setState({
        dataTable: getdata.data
      });
    });
    // this.getData();
  }
  buttonAppDetail = data => {
    var url1 = `/PrediksiMahasiswa/${data.nim}`;
    var nim1 = `${data.nim}`;
    return (
      <div>
        <Link to={{ pathname: url1, state: { nim1: nim1 } }}>
          <Button label="Detail" className="p-button-primary" />
        </Link>
      </div>
    );
  };

  render() {
    let addData = (
      <div className="p-clearfix" style={{ width: "15%" }}>
        <a style={{ float: "left" }} className="edit-btn">
          <Link to="/AddPrediksi">
            <Button label="Add" icon="pi pi-plus" />
          </Link>
        </a>
      </div>
    );
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>List Prediksi Nilai</h1>
            <DataTable
              value={this.state.dataTable}
              paginatorPosition="both"
              selectionMode="single"
              header={addData}
              paginator={true}
              rows={10}
              responsive={true}
            >
              <Column field="nim" header="NIM" sortable={true} />
              <Column field="nama" header="Nama" sortable={true} />
              <Column field="prodi" header="Prodi" sortable={true} />
              <Column field="fk" header="Fakultas" sortable={true} />
              <Column field="total_sks" header="Total SKS" sortable={true} />
              <Column field="ipk" header="IPK" sortable={true} />
              <Column header="Action" body={this.buttonAppDetail} />
            </DataTable>
          </div>
        </div>
      </div>
    );
  }
}
