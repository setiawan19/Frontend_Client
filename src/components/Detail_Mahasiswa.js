import React, { Component } from "react";
import axios from "axios";
import { Link, Route, BrowserRouter, Redirect } from "react-router-dom";
import { DataTable, Column } from "primereact/datatable";

export class Detail_Mahasiswa extends Component {
  constructor() {
    super();
    this.state = {
      data_Mhs: []
    };
  }

  componentDidMount() {
    var pathName = window.location.href;
    var nim = pathName.split("/");
    var hasil = nim[nim.length - 1];
    // var nim = pathName.match(/[0-9]/g);
    // var hasil = "";
    // for (var i = 0; i < nim.length; i++) {
    //   if (i > 3) {
    //     hasil += nim[i];
    //   }
    // }
    axios.get(`http://localhost:3210/mahasiswa/` + hasil).then(getData => {
      this.setState({
        data_Mhs: getData.data
      });
    });
  }

  render() {
    // const listSiswa = this.state.data_Mhs.map((item, index) => (
    //   <tr key={index}>
    //     <td>{item.nim}</td>
    //     <td>{item.nama}</td>
    //     <td>{item.jenis_kelamin}</td>
    //     <td>{item.tempat_lahir}</td>
    //     <td>{item.tanggal_lahir}</td>
    //     <td>{item.asal_sekolah}</td>
    //     <td>{item.nilai_UN}</td>
    //     <td>{item.tahun_lulus}</td>
    //     <td>{item.tahun_masuk_kuliah}</td>
    //     <td>{item.no_hp}</td>
    //     <td>{item.email}</td>
    //     <td>{item.pekerjaan_orangtua}</td>
    //     <td>{item.jurusan_sekolah}</td>
    //     <td>{item.prodi}</td>
    //     <td>{item.total_sks}</td>
    //     <td>{item.fakultas}</td>
    //   </tr>
    // ));
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>DataTable</h1>
            <DataTable
              value={this.state.dataTableValue}
              paginatorPosition="both"
              selectionMode="single"
              // footer={footer}
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
              <Column field="tempat_lahir" header="Lahir" sortable={true} />
              <Column field="tanggal_lahir" header="Birth" sortable={true} />
              <Column field="asal_sekolah" header="Sekolah" sortable={true} />
              <Column field="nama_prodi" header="Prodi" sortable={true} />
              <Column field="fakultas" header="Fakultas" sortable={true} />
              <Column field="total_sks" header="Total SKS" sortable={true} />
              <Column header="Edit" body={this.buttonAppEdit} />
              <Column header="Delete" body={this.buttonAppDel} />
            </DataTable>
          </div>
        </div>
      </div>
      // <div>
      //   <h1>ini Detail_Mhs</h1>
      //   <table>
      //     <thead>
      //       <tr>
      //         <td>NIM</td>
      //         <td>Nama</td>
      //         <td>Gender</td>
      //         <td>Birth</td>
      //         <td>SMA</td>
      //         <td>UN</td>
      //         <td>Lulus</td>
      //         <td>Kuliah</td>
      //         <td>Phone</td>
      //         <td>Email</td>
      //         <td>Work Ort</td>
      //         <td>Jrsn</td>
      //         <td>Prodi</td>
      //         <td>T Sks</td>
      //         <td>Fakt</td>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>{{ listSiswa }}</tr>
      //     </tbody>
      //   </table>
      // </div>
    );
  }
}
