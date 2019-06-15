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
    var url1 = `/Detail_Mahasiswa/${data.nim}`;
    return (
      <div>
        <a className="btn btn-warning">
          <Link to={url1}>Detail</Link>
        </a>
      </div>
    );
  };
  buttonAppEdit = data => {
    var url1 = `/EditMahasiswa/${data.nim}`;
    return (
      <div>
        <a className="btn btn-warning">
          <Link to={url1}>Edit</Link>
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
        <a className="btn btn-danger" onClick={() => this.deleteData(data)}>
          Delete
        </a>
      </div>
    );
  };

  render() {
    let footer = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        <a style={{ float: "left" }} className="edit-btn">
          <Link to="/AddMahasiswa">Add</Link>
        </a>
      </div>
    );
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>DataTable</h1>
            <DataTable
              value={this.state.dataTableValue}
              paginatorPosition="both"
              selectionMode="single"
              footer={footer}
              header="List of Studens Registered"
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
      </div>
    );
  }
}
