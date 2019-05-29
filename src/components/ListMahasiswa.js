import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
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
    this.deleteData = this.deleteData.bind(this);
    this.onDataSelect = this.onDataSelect.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:3210/mahasiswa").then(getdata => {
      this.setState({
        dataTableValue: getdata.data
      });
    });
  }

  deleteData() {
    let index = this.findSelectedDataIndex();
    this.setState({
      dataTableValue: this.state.dataTableValue.filter((val, i) => i !== index),
      selectedData: null,
      dataTableValue: null,
      displayDialog: false
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

  buttonApp() {
    return (
      <div>
        <button
          className="btn btn-warning"
          onClick={() => window.alert("test")}
        >
          Edit
        </button>
      </div>
    );
  }
  buttonAppDel() {
    return (
      <div>
        <button className="btn btn-danger" onClick={() => window.alert("test")}>
          Delete
        </button>
      </div>
    );
  }

  render() {
    // let list_mhs = this.state.dataTableValue.map((item, index)=>{
    //     var nim = item.nim;
    //     var nama = item.nama;
    //     var jenis_kelamin = item.jenis_kelamin;
    //     var prodi = item.prodi;
    //     var fakultas = item.fakultas;
    //     var total_sks = item.total_sks;
    //     return <tr key={index} style={{textAlign: 'center'}}>
    //         <td>{nim}</td> <td>{nama}</td> <td>{jenis_kelamin}</td>
    //         <td>{prodi}</td> <td>{fakultas}</td> <td>{total_sks}</td>
    //         <td>
    //         <span>
    //           <Link to={{ pathname:'/editmahasiswa', state: {nim: nim}}} className="btn btn-warning" style={{marginBottom:40}}><i className="fa fa-pencil-square"></i></Link>
    //           <button onClick={() => this.deleteData(nim)} className="btn btn-danger"><i className="fa fa-times" aria-hidden="true"></i></button>
    //         </span>
    //         </td>
    //     </tr>
    // })
    let footer = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        <button
          style={{ float: "left" }}
          className="pi pi-plus btn btn-primary"
        >
          <Link to="/AddMahasiswa">Add</Link>
        </button>
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
              selection={this.state.dataTableSelection}
              onSelectionChange={event =>
                this.setState({ dataTableSelection: event.value })
              }
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
              <Column header="Edit" body={this.buttonApp.bind(this)} />
              <Column header="Delete" body={this.buttonAppDel.bind(this)} />
            </DataTable>
            {/* <table>
                            <thead>
                                <tr>
                                    <th>NIM</th>
                                    <th>Nama</th>
                                    <th>Jenis Kelamin</th>
                                    <th>Prodi</th>
                                    <th>Fakultas</th>
                                    <th>Total SKS</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list_mhs}
                            </tbody>
                        </table> */}
          </div>
        </div>
      </div>
    );
  }
}
