import React, { Component } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export class AddFK extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      nama: null,
      fakultas: []
    };
  }
  saveFK() {
    // e.preventDefault();
    var url = "http://localhost:3210/fakultas";
    axios
      .post(url, {
        id: this.state.id,
        nama: this.state.nama
      })
      .then(function(response) {
        console.log(response);
        if (alert("anda Berhasil menambahkan data")) {
          window.location("/jurusan");
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
    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 card card-w-title">
          <h1>Tambah Fakultas</h1>
        </div>
        <div className="p-col-6">
          <div className="card card-w-title">
            <h4>Fakultas</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-6">
                <InputText
                  placeholder="Fakultas"
                  type="text"
                  value={this.state.nama}
                  onChange={e => this.setState({ nama: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-col-12">
          <div className="p-col-3">
            <Button
              label="Save"
              icon="pi pi-plus"
              onClick={() => this.saveFK()}
            />
          </div>
        </div>
      </div>
    );
  }
}
