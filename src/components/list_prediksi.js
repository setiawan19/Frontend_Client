import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
// import { Table, Button, Alert } from "react-bootstrap";

import { DataView, DataViewLayoutOptions } from "primereact/dataview";

export class ListPrediksi extends Component {
  constructor() {
    super();
    this.state = {
      dataTable: [],
      query: "",
      data: [],
      filteredData: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3210/view_sks").then(getdata => {
      this.setState({
        dataTable: getdata.data
      });
    });
    // this.getData();
  }

  // handleInputChange = event => {
  //   const query = event.target.value;

  //   this.setState(prevState => {
  //     const filteredData = prevState.data.filter(element => {
  //       return element.name.toLowerCase().includes(query.toLowerCase());
  //     });

  //     return {
  //       query,
  //       filteredData
  //     };
  //   });
  // };

  // getData = () => {
  //   fetch(`http://localhost:3210/view_sks`)
  //     .then(response => response.json())
  //     .then(data => {
  //       const { query } = this.state;
  //       const filteredData = data.filter(element => {
  //         return element.name.toLowerCase().includes(query.toLowerCase());
  //       });

  //       this.setState({
  //         data,
  //         filteredData
  //       });
  //     });
  // };

  render() {
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>List Prediksi Nilai</h1>
            {/* <div className="searchForm">
              <form>
                <input
                  placeholder="Search for..."
                  value={this.state.query}
                  onChange={this.handleInputChange}
                />
              </form>
              <div>
                {this.state.filteredData.map(i => (
                  <p>{i.nama}</p>
                ))}
              </div>
            </div> */}
            <DataTable
              value={this.state.dataTable}
              paginatorPosition="both"
              selectionMode="single"
              header="List of Studens Prediction Grade"
              paginator={true}
              rows={10}
              responsive={true}
            >
              <Column field="nim" header="NIM" sortable={true} />
              <Column field="nama" header="Nama" sortable={true} />
              <Column field="prodi" header="Prodi" sortable={true} />
              <Column field="fakultas" header="Fakultas" sortable={true} />
              <Column field="total_sks" header="Total SKS" sortable={true} />
              <Column
                field="sks_lulus"
                header="Total SKS Lulus"
                sortable={true}
              />
              <Column field="IPS" header="IPS" sortable={true} />
              <Column field="IPK" header="Total SKS Lulus" sortable={true} />
              <Column header="Action" value="detail" />
            </DataTable>
          </div>
        </div>
      </div>
    );
  }
}
