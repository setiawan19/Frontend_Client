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
import { SelectButton } from "primereact/selectbutton";

export class EditMahasiswa extends Component {
  constructor() {
    super();
    this.state = {
      date1: null,
      radioValue: null,
      dropdownProdi: null,
      dropdownFakultas: null,
      ratingValue: null
    };
  }
  saveData() {
    axios
      .post(`http://localhost:3210/mahasiswa/${this.params}`)
      .then(getdata => {
        this.setState({
          dataTableValue: getdata.data
        });
      });
  }

  render() {
    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 card card-w-title">
          <h1>Edit Data Mahasiswa</h1>
        </div>
        <div className="p-col-6">
          <div className="card card-w-title">
            <h4>Personal</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-6">
                <InputText placeholder="NIM" type="number" />
              </div>
              <div className="p-col-12 p-md-6">
                <InputText placeholder="Nama" type="text" />
              </div>
              <div className="p-col-12 p-md-6" type="text">
                <InputText placeholder="Tempat Lahir" />
              </div>
              <div className="p-col-12 p-md-6" type="date">
                <Calendar placeholder="Tanggal Lahir" />
              </div>

              <div className="p-col-12 p-md-6">
                <InputText placeholder="Pekerjaan Orangtua" />
              </div>
              <div className="p-col-12 p-md-12">
                <label>Jenis Kelamin </label>
                <div className="p-col-12 p-md-6">
                  <RadioButton
                    value="Laki-Laki"
                    inputId="rb1"
                    onChange={event =>
                      this.setState({ radioValue: event.value })
                    }
                    checked={this.state.radioValue === "Laki-Laki"}
                  />
                  <label htmlFor="rb1" className="p-radiobutton-label">
                    Laki-Laki
                  </label>{" "}
                  &nbsp; &nbsp;
                  <RadioButton
                    value="Perempuan"
                    inputId="rb2"
                    onChange={event =>
                      this.setState({ radioValue: event.value })
                    }
                    checked={this.state.radioValue === "Perempuan"}
                  />
                  <label htmlFor="rb2" className="p-radiobutton-label">
                    Perempuan
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-col-6">
          <div className="card card-w-title">
            <h4>Contact</h4>
            <div className="p-col-12 p-md-6">
              <InputText placeholder="Handphone" />
            </div>
            <div className="p-col-12 p-md-6">
              <InputText placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="p-col-6">
          <div className="card card-w-title">
            <h4>Pendidikan</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-6">
                <InputText placeholder="Asal Sekolah" />
              </div>
              <div className="p-col-12 p-md-6">
                <InputText placeholder="Jurusan SMA" />
              </div>
              <div className="p-col-12 p-md-6">
                <InputText placeholder="Nilai UN" type="number" />
              </div>
              <div className="p-col-12 p-md-6">
                <InputText placeholder="Tahun Lulus SMA" />
              </div>
              <div className="p-col-12 p-md-6">
                <InputText placeholder="Tahun Masuk Kuliah" />
              </div>
              <div className="p-col-12 p-md-6">
                <Dropdown placeholder="Prodi" />
              </div>
              <div className="p-col-12 p-md-6">
                <Dropdown placeholder="Fakultas" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-col-12">
          <div className="p-col-3">
            <Button
              label="Update"
              icon="pi pi-pencil"
              onClick={this.saveData()}
            />
          </div>
        </div>
      </div>
    );
  }
}
