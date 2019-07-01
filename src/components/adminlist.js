import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

// import { Button } from "react-bootstrap";

import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Button } from "primereact/button";

export class ListAdmin extends Component {
  constructor() {
    super();
    this.state = {
      dataTable: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3210/admin").then(getdata => {
      this.setState({
        dataTable: getdata.data
      });
    });
  }

  render() {
    let AddData = (
      <div style={{ width: "15%", marginBottom: "10px" }}>
        <Link to="/AddMahasiswa">
          <Button label="Add" icon="pi pi-pencil" />
        </Link>
      </div>
    );
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>List Admin</h1>
            {AddData}
            <DataTable
              value={this.state.dataTable}
              paginatorPosition="both"
              selectionMode="single"
              paginator={true}
              rows={10}
              responsive={true}
              selection={this.state.dataTableSelection}
              onSelectionChange={event =>
                this.setState({ dataTableSelection: event.value })
              }
            >
              <Column field="id" header="ID" sortable={true} />
              <Column field="nama" header="Nama" sortable={true} />
              <Column field="alamat" header="Alamat" sortable={true} />
              <Column field="phone" header="Phone" sortable={true} />
              <Column
                field="jenis_kelamin"
                header="Jenis Kelamin"
                sortable={true}
              />
              <Column field="email" header="Email" sortable={true} />
              <Column field="password" header="Pasword" sortable={true} />
            </DataTable>
          </div>
        </div>
      </div>
    );
  }
}
