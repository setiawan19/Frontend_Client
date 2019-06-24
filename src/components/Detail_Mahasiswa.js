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
    var nimDetail = this.props.location.state.nim2;
    var url = `http://localhost:3210/mahasiswa/${nimDetail}`;

    axios.get(url).then(getData => {
      this.setState({
        data_Mhs: getData.data
      });
    });
  }

  render() {
    // console.log(nimDetail);

    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>DataTable</h1>
            <DataTable
              value={this.state.data_Mhs}
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
              <Column field="no_hp" header="Phone" sortable={true} />
              <Column field="email" header="Email" sortable={true} />
              <Column field="nama_prodi" header="Prodi" sortable={true} />
              <Column field="fakultas" header="Fakultas" sortable={true} />
              <Column field="total_sks" header="Total SKS" sortable={true} />
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
