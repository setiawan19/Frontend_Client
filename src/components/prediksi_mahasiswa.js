import React, { Component } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { AutoComplete } from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { ListBox } from "primereact/listbox";
import { Rating } from "primereact/rating";
import { ColorPicker } from "primereact/colorpicker";
import { Editor } from "primereact/editor";
import { ToggleButton } from "primereact/togglebutton";
import { SelectButton } from "primereact/selectbutton";

import { Route, Link } from "react-router-dom";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export class PrediksiMahasiswa extends Component {
  constructor() {
    super();
    this.state = {
      dataTable: [],
      smsMax: [],
      nim: 20191011,
      nama: "",
      sks_lulus: 0,
      ips: 0,
      ipk: 0,
      semester: 0,
      tahun: 0,
      sisa_sks: 0,
      total_sks: 0,
      target_wisuda: "",
      semesterMax: 0
    };
  }
  // componentDidMount() {
  //   axios.get("http://localhost:3210/view_sks/20191011").then(getdata => {
  //     this.setState({
  //       dataTable: getdata.data
  //     });
  //   });
  // }
  // componentWillMount() {
  //   axios.get("http://localhost:3210/semester/20191011").then(smsdata => {
  //     this.setState({
  //       smsMax: smsdata.data
  //     });
  //   });
  // }
  componentDidMount() {
    var nimDetails = this.props.location.state.nim1;
    console.log(nimDetails);
    axios.get(`http://localhost:3210/view_sks/${nimDetails}`).then(getdata => {
      this.setState({
        dataTable: getdata.data
      });
    });
  }
  componentWillMount() {
    var nimDetails = this.props.location.state.nim1;
    axios.get(`http://localhost:3210/semester/${nimDetails}`).then(smsdata => {
      this.setState({
        smsMax: smsdata.data
      });
    });
  }

  // AddData() {
  //   axios.post("http://localhost:3210/view_sks/add/20191011").then(postData => {
  //     this.setState({
  //       data: [
  //         {
  //           nim: this.state.data.nim,
  //           nama: this.state.dataTable.nama,
  //           sks_lulus: this.state.sks_lulus,
  //           ips: this.state.data.ips,
  //           ipk: this.state.data.ipk,
  //           semester: this.state.semester,
  //           tahun: this.state.data.tahun,
  //           sisa_sks: this.state.data.sisa_sks,
  //           total_sks: this.state.data.total_sks,
  //           target_wisuda: this.state.data.target_wisuda
  //         }
  //       ]
  //     }).then(function(response) {
  //       window.location.reload();
  //     });
  //   });
  // }

  render() {
    console.log(this.props.location.state.nim1);
    console.log("test", this.state.dataTable);
    console.log("test2", this.state.smsMax);

    const listItems = this.state.dataTable.map((item, ind) => (
      <tr key={ind}>
        <td>{item.sisa_sks}</td>
        <td>{item.target_wisuda}</td>
      </tr>
    ));

    let smax = this.state.smsMax.map((itm, ind) => (
      <tr key={ind}>
        <td>semester = {itm.semester}</td>
        <td>sisa sks = {itm.sisa_sks}</td>
      </tr>
    ));
    let aaa = e => this.setState({ semesterMax: this.state.smsMax.semester });
    console.log("haloo", this.state.semesterMax);

    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h4>Input Grade of Student</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-4 form-group">
                <InputText
                  className="form-control"
                  placeholder="Total SKS Lulus"
                  type="number"
                  value={this.state.total_sks}
                  onChange={e => this.setState({ total_sks: e.target.value })}
                />
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <InputText
                  className="form-control"
                  placeholder="IPS"
                  type="number"
                  value={this.state.ips}
                  onChange={e => this.setState({ ips: e.target.value })}
                />
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <InputText
                  className="form-control"
                  placeholder="Semester"
                  type="number"
                  value={this.state.semester}
                  onChange={e => this.setState({ semester: e.target.value })}
                />
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <button>save</button>
              </div>
            </div>
          </div>
          <div className="card card-w-title">
            <h1>Prediksi Nilai</h1>
            <DataTable
              value={this.state.dataTable}
              //paginatorPosition="both"
              selectionMode="single"
              header="List of Student Grades"
              paginator={true}
              rows={10}
              responsive={true}
              //selection={this.state.dataTableSelection}
              onSelectionChange={event =>
                this.setState({ dataTableSelection: event.value })
              }
            >
              <Column field="nim" header="NIM" sortable={true} />
              <Column field="nama" header="Nama" sortable={true} />
              <Column field="sks_lulus" header="SKS Lulus" sortable={true} />
              <Column field="ips" header="IPS" sortable={true} />
              <Column field="ipk" header="IPK" sortable={true} />

              <Column field="semester" header="Semester" sortable={true} />
              <Column field="tahun" header="TAHUN" sortable={true} />
              <Column field="sisa_sks" header="Sisa SKS" sortable={true} />
              <Column field="total_sks" header="Total SKS" />
              <Column
                field="target_wisuda"
                header="Target Wisuda"
                sortable={true}
              />
              <Column field="prodi" header="Prodi" sortable={true} />
              <Column field="fakultas" header="Fakultas" sortable={true} />
            </DataTable>
          </div>
          <div className="card card-w-title">
            <h4>Review Your Graduation</h4>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>Anda akan lulus :</p>
                  </td>
                  <td>
                    {/* {this.state.dataTable.map(item => {
                    item.target_wisuda;
                  })} */}
                  </td>
                </tr>
                {listItems}
                {smax}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
