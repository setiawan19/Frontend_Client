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

export class AddMahasiswa extends Component {
  constructor() {
    super();
    this.state = {
      date1: null,
      radioValue: null,
      dropdownProdi: null,
      dropdownFakultas: null,
      ratingValue: null,
      nim: null,
      nama: null,
      jenis_kelamin: null,
      tempat_lahir: null,
      tanggal_lahir: "",
      asal_sekolah: null,
      nilai_UN: null,
      tahun_lulus: null,
      tahun_masuk_kuliah: null,
      no_hp: null,
      email: null,
      pekerjaan_orangtua: null,
      jurusan_sekolah: null,
      id_prodi: "",
      nama_prodi: null,
      idprodi: null,
      prodi: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3210/prodi").then(getdata => {
      this.setState({
        prodi: getdata.data
      });
    });
  }
  saveData() {
    var url = "http://localhost:3210/mahasiswa";
    axios
      .post(url, {
        nim: this.state.nim,
        nama: this.state.nama,
        jenis_kelamin: this.state.radioValue,
        tempat_lahir: this.state.tempat_lahir,
        tanggal_lahir: this.state.tanggal_lahir,
        asal_sekolah: this.state.asal_sekolah,
        nilai_UN: this.state.nilai_UN,
        tahun_lulus: this.state.tahun_lulus,
        tahun_masuk_kuliah: this.state.tahun_masuk_kuliah,
        no_hp: this.state.no_hp,
        email: this.state.email,
        pekerjaan_orangtua: this.state.pekerjaan_orangtua,
        jurusan_sekolah: this.state.jurusan_sekolah,
        id_prodi: this.state.id_prodi
      })
      .then(function(response) {
        console.log(response);
        if (alert("anda Berhasil menambahkan data")) {
          window.location("/list_mahasiswa");
        }
      })
      .catch(function(error) {
        console.log(error);
        if (alert("anda gagal menambahkan data")) {
          window.location.reload();
        }
      });
  }

  test() {
    console.log(this.state.nim);
    console.log(this.state.nama);
    console.log(this.state.radioValue);
    console.log(this.state.tempat_lahir);
    console.log(this.state.tanggal_lahir);
    console.log(this.state.asal_sekolah);
    console.log(this.state.nilai_UN);
    console.log(this.state.tahun_lulus);
    console.log(this.state.tahun_masuk_kuliah);
    console.log(this.state.no_hp);
    console.log(this.state.pekerjaan_orangtua);
    console.log(this.state.jurusan_sekolah);
    console.log(this.state.id_prodi);
    console.log(this.state.prodi);
  }

  render() {
    // const prodiSelectItems =
    // [
    //   //   { label: this.prodi.nama, value: this.prodi.id },
    //   { label: "Prodi 2", value: "2" },
    //   { label: "Prodi 3", value: "3" },
    //   { label: "Prodi 4", value: "4" },
    //   { label: "Prodi 5", value: "5" }
    // ];
    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 card card-w-title">
          <h1>Add Data Mahasiswa</h1>
        </div>
        <div className="p-col-6">
          <div className="card card-w-title">
            <h4>Personal</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-6">
                <InputText
                  placeholder="NIM"
                  type="number"
                  value={this.state.nim}
                  onChange={e => this.setState({ nim: e.target.value })}
                />
              </div>
              <div className="p-col-12 p-md-6">
                <InputText
                  placeholder="Nama"
                  type="text"
                  value={this.state.nama}
                  onChange={e => this.setState({ nama: e.target.value })}
                />
              </div>
              <div className="p-col-12 p-md-6">
                <InputText
                  placeholder="Tempat Lahir"
                  type="text"
                  value={this.state.tempat_lahir}
                  onChange={e =>
                    this.setState({ tempat_lahir: e.target.value })
                  }
                />
              </div>
              <div className="p-col-12 p-md-6">
                <Calendar
                  placeholder="Tanggal Lahir"
                  dateFormat="yy/mm/dd"
                  value={this.state.tanggal_lahir}
                  onChange={e =>
                    this.setState({ tanggal_lahir: e.target.value })
                  }
                />
              </div>

              <div className="p-col-12 p-md-6">
                <InputText
                  placeholder="Pekerjaan Orangtua"
                  value={this.state.pekerjaan_orangtua}
                  onChange={e =>
                    this.setState({ pekerjaan_orangtua: e.target.value })
                  }
                />
              </div>
              <div className="p-col-12 p-md-12">
                <label>Jenis Kelamin </label>
                <div className="p-col-12 p-md-6">
                  <RadioButton
                    value="Laki-Laki"
                    inputId="rb1"
                    name="gender"
                    onChange={e => this.setState({ radioValue: e.value })}
                    checked={this.state.radioValue === "Laki-Laki"}
                  />
                  <label htmlFor="rb1" className="p-radiobutton-label">
                    Laki-Laki
                  </label>{" "}
                  &nbsp; &nbsp;
                  <RadioButton
                    value="Perempuan"
                    inputId="rb2"
                    name="gender"
                    onChange={e => this.setState({ radioValue: e.value })}
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
              <InputText
                placeholder="Handphone"
                type="number"
                value={this.state.no_hp}
                onChange={e => this.setState({ no_hp: e.target.value })}
              />
            </div>
            <div className="p-col-12 p-md-6">
              <InputText
                placeholder="Email"
                type="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="p-col-6">
          <div className="card card-w-title">
            <h4>Pendidikan</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-6">
                <InputText
                  placeholder="Asal Sekolah"
                  value={this.state.asal_sekolah}
                  onChange={e =>
                    this.setState({ asal_sekolah: e.target.value })
                  }
                />
              </div>
              <div className="p-col-12 p-md-6">
                <InputText
                  placeholder="Jurusan SMA"
                  value={this.state.jurusan_sekolah}
                  onChange={e =>
                    this.setState({ jurusan_sekolah: e.target.value })
                  }
                />
              </div>
              <div className="p-col-12 p-md-6">
                <InputText
                  placeholder="Nilai UN"
                  type="number"
                  value={this.state.nilai_UN}
                  onChange={e => this.setState({ nilai_UN: e.target.value })}
                />
              </div>
              <div className="p-col-12 p-md-6">
                <InputText
                  placeholder="Tahun Lulus SMA"
                  type="number"
                  value={this.state.tahun_lulus}
                  onChange={e => this.setState({ tahun_lulus: e.target.value })}
                />
              </div>
              <div className="p-col-12 p-md-6">
                <InputText
                  placeholder="Tahun Masuk Kuliah"
                  type="number"
                  value={this.state.tahun_masuk_kuliah}
                  onChange={e =>
                    this.setState({ tahun_masuk_kuliah: e.target.value })
                  }
                />
              </div>
              <div className="p-col-12 p-md-6">
                {/* <Dropdown
                  options={prodiSelectItems}
                  placeholder="Prodi"
                  value={this.state.id_prodi}
                  onChange={e => this.setState({ id_prodi: e.value })}
                /> */}
                <select
                  value={this.state.id_prodi}
                  onChange={e =>
                    this.setState({
                      id_prodi: e.target.value,
                      validationError:
                        e.target.value === "" ? "select prodi" : ""
                    })
                  }
                >
                  {this.state.prodi.map((item, ind) => (
                    <option key={ind} value={item.id}>
                      {item.nama}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="p-col-12">
          <div className="p-col-3">
            <Button
              label="Save"
              icon="pi pi-plus"
              onClick={() => this.saveData()}
            />
          </div>
        </div>
      </div>
    );
  }
}
