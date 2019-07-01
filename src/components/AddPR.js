import React, { Component } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export class AddPR extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      nama: null,
      total_sks: null,
      id_fk: null,
      prodi: []
    };
  }
  
  savePR() {
    // e.preventDefault();
    var url2 = "http://localhost:3210/prodi";
    axios
      .post(url2, {
        id: this.state.id,
        nama: this.state.nama,
        total_sks: this.state.total_sks,
        id_fk: this.state.id_fk
      })
      .then(function(response2) {
        console.log(response2);
        if (alert("anda Berhasil menambahkan data")) {
          window.location("/jurusan");
        }
      })
      .catch(function(error2) {
        console.log(error2);
        if (alert("anda gagal menambahkan data")) {
          window.location.reload();
        }
      });
  }

  render() {
    return (
      <div className="p-grid p-fluid">
      <div className="p-col-12 card card-w-title">
        <h1>Tambah Prodi</h1>
      </div>
      <div className="p-col-6">
        <div className="card card-w-title">
          <h4>Prodi</h4>
          <div className="p-grid">
            <div className="p-col-12 p-md-6">
              <InputText
                placeholder="Prodi"
                type="text"
                value={this.state.nama}
                onChange={e => this.setState({ nama: e.target.value })}
              />
            </div>
          </div>
          <div className="p-col-12 p-md-6">
              <InputText
                placeholder="Total SKS"
                type="number"
                value={this.state.total_sks}
                onChange={e => this.setState({ total_sks: e.target.value })}
              />
            </div>
            <div className="p-col-12 p-md-6">
              <InputText
                placeholder="id_fk"
                type="number"
                value={this.state.id_fk}
                onChange={e => this.setState({ id_fk: e.target.value })}
              />
            </div>
        </div>
      </div>
      <div className="p-col-12">
        <div className="p-col-3">
          <Button
            label="Save"
            icon="pi pi-plus"
            onClick={() => this.savePR()}
          />
        </div>
      </div>
    </div>
    );
  }
}
