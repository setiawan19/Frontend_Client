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
import { Editor } from "primereact/editor";
import { ToggleButton } from "primereact/togglebutton";
import { SelectButton } from "primereact/selectbutton";

import { Route, Link } from "react-router-dom";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export class PrediksiMahasiswa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTable: [],
      smsMax: [],
      nim: null,
      nama: null,
      sks_lulus: 0,
      ips: 0,
      ipk: null,
      semester: 0,
      tahun: null,
      sisa_sks: null,
      total_sks: 0,
      target_wisuda: "",
      semesterMax: null
    };
  }

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
    axios.get(`http://localhost:3210/semester/${nimDetails}`).then(getdata => {
      this.setState({
        smsMax: getdata.data
      });
    });
  }
  save() {
    // Get Year
    var newYear = new Date();
    var years = newYear.getFullYear();
    console.log("TAHUN", years);

    // Get Total IPS
    var total_ips = 0;
    for (var i = 0; i < this.state.dataTable.length; i++) {
      total_ips = total_ips + this.state.dataTable[i].ips;
      console.log("TOTAL IPS", total_ips);
    }

    // Get IPK
    var Total_ipk =
      (parseFloat(total_ips) + parseFloat(this.state.ips)) /
      this.state.semester;
    var hasil_ipk = Total_ipk.toFixed(2);
    console.log("IPK", hasil_ipk);
    console.log("IPS", this.state.ips);
    console.log("TOTAL IPS", total_ips);

    // Get Total SKS
    var totalSKS = 0;
    for (var i = 0; i < this.state.dataTable.length; i++) {
      totalSKS += this.state.dataTable[i].sks_lulus;
    }
    var totalSksLulus = parseInt(this.state.sks_lulus) + parseInt(totalSKS);

    // Get Sisa SKS
    var SisaSks =
      parseInt(this.state.dataTable[0].total_sks) - parseInt(totalSksLulus);
    console.log("Sisa SKS", SisaSks);
    if (SisaSks < 0) {
      SisaSks = 0;
    }
    // Get Target Wisuda
    var TargetWisuda = SisaSks / 24;
    var PrediksiWisuda = "";

    if (SisaSks <= 0) {
      var PrediksiWisuda = "Selamat Anda Lulus";
      console.log(PrediksiWisuda);
    } else {
      var PrediksiWisuda =
        "Target Wisuda " + (Math.floor(TargetWisuda) + 1) + " Semester lagi";
      console.log(PrediksiWisuda);
    }
    // this.setState({ target_wisuda: PrediksiWisuda });

    var nimDetails = this.props.location.state.nim1;
    var url = `http://localhost:3210/view_sks/add/${nimDetails}`;
    axios
      .post(url, {
        nim: nimDetails,
        sks_lulus: this.state.sks_lulus,
        ips: this.state.ips,
        ipk: hasil_ipk,
        semester: this.state.semester,
        tahun: years,
        sisa_sks: SisaSks,
        target_wisuda: PrediksiWisuda
      })
      .then(function(response) {
        console.log(response);
        if (alert("anda Berhasil menambahkan data")) {
          window.location.reload();
        }
      })
      .catch(function(error) {
        console.log(error);
        if (alert("anda gagal menambahkan data")) {
          window.location.reload();
        }
      });
  }

  render() {
    let hasil_review = this.state.smsMax.map(itm => (
      <td key={itm}> {itm.target_wisuda}</td>
    ));

    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h4>Input Grade of Student</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-4 form-group">
                <label>SKS Lulus : </label>
                <InputText
                  className="form-control"
                  placeholder="SKS Lulus"
                  type="number"
                  value={this.state.sks_lulus}
                  onChange={e => this.setState({ sks_lulus: e.target.value })}
                />
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <label>IPS : </label>
                <InputText
                  className="form-control"
                  placeholder="IPS"
                  type="number"
                  value={this.state.ips}
                  onChange={e => this.setState({ ips: e.target.value })}
                />
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <label>Semester : </label>
                <InputText
                  className="form-control"
                  placeholder="Semester"
                  type="number"
                  value={this.state.semester}
                  onChange={e => this.setState({ semester: e.target.value })}
                />
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <Button
                  label="Save"
                  onClick={() => {
                    this.save();
                  }}
                />
              </div>
            </div>
          </div>

          {/* Tabel Hasil */}
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
              <Column field="tahun" header="Tahun" sortable={true} />
              <Column field="sisa_sks" header="Sisa SKS" sortable={true} />
              <Column field="total_sks" header="Total SKS" />
              <Column field="target_wisuda" header="Target" sortable={true} />
              <Column field="prodi" header="Prodi" sortable={true} />
              <Column field="fakultas" header="Fakultas" sortable={true} />
              {/* <Column header="" body={this.tombol} /> */}
            </DataTable>
          </div>
          <div className="card card-w-title">
            <h4>Review Your Graduation</h4>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <b>Result :</b>
                    </p>
                  </td>
                  {hasil_review}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
