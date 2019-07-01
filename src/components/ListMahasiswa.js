import React, { Component } from "react";
import axios from "axios";
import { Route, Link, Redirect } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { OrganizationChart } from "primereact/organizationchart";
import { Tree } from "primereact/tree";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { PickList } from "primereact/picklist";
import { OrderList } from "primereact/orderlist";
import { FullCalendar } from "primereact/fullcalendar";
import { Panel } from "primereact/panel";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
// import {AddMahasiswa} from './AddMahasiswa';

import { AddMahasiswa } from "./AddMahasiswa";
import { EditMahasiswa } from "./EditMahasiswa";
import { Detail_Mahasiswa } from "./Detail_Mahasiswa";

export class ListMahasiswa extends Component {
  constructor() {
    super();
    this.state = {
      dataTableValue: []
    };
    // this.createdMenu();
    // this.save = this.save.bind(this);
    //this.deleteData = this.deleteData.bind(this);
    this.onDataSelect = this.onDataSelect.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:3210/mahasiswa").then(getdata => {
      this.setState({
        dataTableValue: getdata.data
      });
    });
  }

  findSelectedDataIndex() {
    return this.state.dataTableValue.indexOf(this.state.selectedData);
  }
  onDataSelect(e) {
    this.setState({
      displayDialog: true,
      dataTableValue: Object.assign({}, e.data)
    });
  }

  buttonAppDetail = data => {
    var url2 = `/Detail_Mahasiswa/${data.nim}`;
    var nim2 = `${data.nim}`;
    return (
      <div>
        <Link to={{ pathname: url2, state: { nim2: nim2 } }}>
          <Button label="Detail" />
        </Link>
      </div>
    );
  };
  buttonAppEdit = data => {
    var url1 = `/EditMahasiswa/${data.nim}`;
    return (
      <div>
        <a className="btn btn-warning">
          <Link to={url1}>
            <Button
              label="Edit"
              icon="pi pi-pencil"
              className="p-button-warning"
            />
          </Link>
        </a>
      </div>
    );
  };
  deleteData = data => {
    if (window.confirm("Delete this ?")) {
      axios.delete(`http://localhost:3210/mahasiswa/${data.nim}`).then(() => {
        window.location.reload();
      });
    }
  };
  buttonAppDel = data => {
    return (
      <div>
        {/* <a className="btn btn-danger" onClick={() => this.deleteData(data)}>
          Delete
        </a> */}
        <Button
          label="Delete"
          icon="pi pi-pencil"
          className="p-button-danger"
          onClick={() => this.deleteData(data)}
        />
      </div>
    );
  };

  render() {
    let AddData = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        <a style={{ float: "left" }} className="edit-btn">
          <Link to="/AddMahasiswa">
            <Button label="Add" icon="pi pi-pencil" />
          </Link>
        </a>
      </div>
    );
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>Data Mahasiswa</h1>
            <DataTable
              value={this.state.dataTableValue}
              paginatorPosition="both"
              selectionMode="single"
              header={AddData}
              paginator={true}
              rows={10}
              responsive={true}
            >
              <Column field="nim" header="NIM" sortable={true} />
              <Column field="nama" header="Nama" sortable={true} />
              <Column
                field="jenis_kelamin"
                header="Jenis Kelamin"
                sortable={true}
              />
              <Column field="nama_prodi" header="Prodi" sortable={true} />
              <Column field="fakultas" header="Fakultas" sortable={true} />
              <Column field="total_sks" header="Total SKS" sortable={true} />
              <Column header="Detail" body={this.buttonAppDetail} />
              <Column header="Edit" body={this.buttonAppEdit} />
              <Column header="Delete" body={this.buttonAppDel} />
            </DataTable>
          </div>
        </div>
        {/* <div className="p-col-12">
          <div className="card card-w-title">
            <Route path="/Detail_Mahasiswa/:nim" component={Detail_Mahasiswa} />
            <Route path="/AddMahasiswa" component={AddMahasiswa} />
            <Route path="/EditMahasiswa/:nim" component={EditMahasiswa} />
          </div>
        </div> */}
      </div>
    );
  }
}
