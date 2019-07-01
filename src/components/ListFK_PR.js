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
import { AddFK } from "./AddFK";
import { AddPR } from "./AddPR";
import { EditFK } from "./EditFK";
import { EditPR } from "./EditPR";
// import { DetailFK_PR } from './DetailFK_PR';

export class ListFK_PR extends Component {
  constructor() {
    super();
    this.state = {
      dataFK: [],
      dataPR: []
    };
    this.onDataSelect = this.onDataSelect.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:3210/fakultas").then(getFK => {
      this.setState({
        dataFK: getFK.data
      });
    });
    axios.get("http://localhost:3210/prodi").then(getPR => {
      this.setState({
        dataPR: getPR.data
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

  buttonAppEditFK = data => {
    var url1 = `/EditFK/${data.id}`;
    return (
      <div>
        <a>
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
  buttonAppEditPR = data => {
    var url2 = `/EditPR/${data.id}`;
    return (
      <div>
        <Link to={url2}>
          <Button
            label="Edit"
            icon="pi pi-pencil"
            className="p-button-warning"
          />
        </Link>
      </div>
    );
  };
  deleteDataFK = data => {
    if (window.confirm("Delete this ?")) {
      axios.delete(`http://localhost:3210/fakultas/${data.id}`).then(() => {
        window.location.reload();
      });
    }
  };
  deleteDataPR = data => {
    if (window.confirm("Delete this ?")) {
      axios.delete(`http://localhost:3210/prodi/${data.id}`).then(() => {
        window.location.reload();
      });
    }
  };
  buttonAppDelFK = data => {
    return (
      <div>
        <Button
          label="Delete"
          icon="pi pi-pencil"
          className="p-button-danger"
          onClick={() => this.deleteDataFK(data)}
        />
      </div>
    );
  };
  buttonAppDelPR = data => {
    return (
      <div>
        <Button
          label="Delete"
          icon="pi pi-pencil"
          className="p-button-danger"
          onClick={() => this.deleteDataPR(data)}
        />
      </div>
    );
  };

  render() {
    let footerFK = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        <a style={{ float: "left", fontSize: 15 }} className="edit-btn">
          <Link to="/AddFK">
            <Button label="Add Fakultas" icon="pi pi-plus" />
          </Link>
        </a>
      </div>
    );
    let footerPR = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        <a style={{ float: "left", fontSize: 15 }} className="edit-btn">
          <Link to="/AddPR">
            <Button label="Add Prodi" icon="pi pi-plus" />
          </Link>
        </a>
      </div>
    );
    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 card card-w-title">
          <h1>List Data Jurusan Kampus</h1>
          <div className="p-col-12 p-md-12">
            <DataTable
              value={this.state.dataFK}
              header="List Fakultas"
              rows={10}
              footer={footerFK}
              responsive={true}
              selection={this.state.dataTableSelection}
              onSelectionChange={event =>
                this.setState({ dataTableSelection: event.value })
              }
            >
              <Column field="id" header="id" sortable={true} />
              <Column field="nama" header="Nama" sortable={true} />
              <Column header="Edit" body={this.buttonAppEditFK} />
              <Column header="Delete" body={this.buttonAppDelFK} />
            </DataTable>
          </div>
          <div className="p-col-12 p-md-12">
            <DataTable
              value={this.state.dataPR}
              header="List Prodi"
              rows={10}
              footer={footerPR}
              responsive={true}
              selection={this.state.dataTableSelection}
              onSelectionChange={event =>
                this.setState({ dataTableSelection: event.value })
              }
            >
              <Column field="id" header="id" sortable={true} />
              <Column field="nama" header="Nama" sortable={true} />
              <Column field="total_sks" header="Total SKS" sortable={true} />
              {/* <Column field="id_fk" header="id_fk" sortable={true} /> */}
              <Column header="Edit" body={this.buttonAppEditPR} />
              <Column header="Delete" body={this.buttonAppDelPR} />
            </DataTable>
          </div>
        </div>
      </div>
    );
  }
}
