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

export class AddPrediksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodi: [],
      mahasiswa: [],
      get_sks: null,
      smsMax: [],
      nim: null,
      nama: null,
      sks_lulus: 0,
      ips: 0,
      ipk: null,
      semester: 1,
      tahun: null,
      sisa_sks: null,
      total_sks: null,
      target_wisuda: "",
      semesterMax: null
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3210/prodi").then(getdata => {
      this.setState({
        prodi: getdata.data
      });
      axios.get("http://localhost:3210/mahasiswa").then(getdata => {
        this.setState({
          mahasiswa: getdata.data
        });
      });

      // this.setState({ nim: this.mahasiswa[0].nim });
    });
  }
  //   componentWillMount() {
  //     var nimDetails = this.props.location.state.nim1;
  //     axios.get(`http://localhost:3210/semester/${nimDetails}`).then(getdata => {
  //       this.setState({
  //         smsMax: getdata.data
  //       });
  //     });
  //   }
  save() {
    // Get Year
    var newYear = new Date();
    var years = newYear.getFullYear();
    console.log("TAHUN", years);

    // Get Sisa SKS
    var SisaSks = parseInt(this.state.get_sks) - parseInt(this.state.sks_lulus);
    console.log("Sisa SKS", SisaSks);
    if (SisaSks < 0) {
      SisaSks = 0;
    }
    // Get Target Wisuda
    var TargetWisuda = SisaSks / 24;
    var PrediksiWisuda = "";
    var statusAktif = "";
    var stats_MHS = Math.floor(TargetWisuda) + 2 + this.state.semester;

    console.log("ini total hitung status : ", stats_MHS);
    if (stats_MHS <= 8) {
      var PrediksiWisuda = "Lulus Tepat Waktu";
    } else {
      var PrediksiWisuda = "Lulus Tidak Tepat Waktu";
    }

    if (SisaSks <= 0) {
      var statusAktif = "Tidak Aktif";
      console.log(statusAktif);
    } else {
      var statusAktif = "Aktif";
      console.log(statusAktif);
    }

    // this.setState({ target_wisuda: PrediksiWisuda });

    var url = `http://localhost:3210/view_sks/add/` + this.state.nim;
    axios
      .post(url, {
        nim: this.state.nim,
        sks_lulus: this.state.sks_lulus,
        ips: this.state.ips,
        ipk: this.state.ips,
        semester: this.state.semester,
        tahun: years,
        sisa_sks: SisaSks,
        target_wisuda: PrediksiWisuda,
        status_mhs: statusAktif
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
    var a = this.state.mahasiswa[0];
    console.log(a);
    return (
      <div className="p-grid">
        <div className="p-col-6">
          <div className="card card-w-title">
            <h4>Input Grade of Student</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-2 form-group">
                <label>NIM : </label>
              </div>
              <div className="p-col-12 p-md-7 form-group">
                <select
                  value={this.state.nim}
                  onChange={e =>
                    this.setState({
                      nim: e.target.value,
                      validationError: e.target.value === "" ? "select NIM" : ""
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "5px",
                    borderRadius: "5px",
                    height: "35px"
                  }}
                >
                  {this.state.mahasiswa.map((item, ind) => (
                    <option key={ind} value={item.nim}>
                      {item.nama}
                    </option>
                  ))}
                </select>
              </div>
              <div className="p-col-12 p-md-3" />
              {/* <div className="p-col-12 p-md-2">
                <label>Prodi : </label>
              </div>
              <div className="p-col-12 p-md-7 form-group">
                <select
                  value={this.state.get_sks}
                  onChange={e =>
                    this.setState({
                      get_sks: e.target.value,
                      validationError:
                        e.target.value === "" ? "select prodi" : ""
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "5px",
                    borderRadius: "5px",
                    height: "35px"
                  }}
                >
                  {this.state.mahasiswa.map((item, ind) => (
                    <option key={ind} value={item.total_sks}>
                      {item.nama_prodi}
                    </option>
                  ))}
                </select>
              </div>
              <div className="p-col-12 p-md-3" /> */}

              <div className="p-col-12 p-md-2 form-group">
                <label>SKS Lulus : </label>
              </div>
              <div className="p-col-12 p-md-7 form-group">
                <InputText
                  className="form-control"
                  placeholder="SKS Lulus"
                  type="number"
                  value={this.state.sks_lulus}
                  onChange={e => this.setState({ sks_lulus: e.target.value })}
                />
              </div>
              <div className="p-col-12 p-md-3" />
              <div className="p-col-12 p-md-2 form-group">
                <label>IPS : </label>
              </div>
              <div className="p-col-12 p-md-7 form-group">
                <InputText
                  className="form-control"
                  placeholder="IPS"
                  type="number"
                  value={this.state.ips}
                  onChange={e => this.setState({ ips: e.target.value })}
                />
              </div>
            </div>
            <div className="p-col-12 p-md-6 form-group">
              <Button
                onClick={() => {
                  this.save();
                }}
                label="Save"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
