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

import { Route, Link } from "react-router-dom";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export class PrediksiMahasiswa extends Component {
  constructor() {
    super();
    this.state = {
      dataTable: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3210/view_sks/:nim").then(getdata => {
      this.setState({
        dataTable: getdata.data
      });
    });
    console.log(this.state.dataTable.nama);
  }
  render() {
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h4>Input Grade of Student</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-4 form-group">
                <InputText
                  className="form-control"
                  placeholder="Total SKS Lulus"
                  type="number"
                />
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <InputText
                  className="form-control"
                  placeholder="IPS"
                  type="number"
                />
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <InputText
                  className="form-control"
                  placeholder="Semester"
                  type="number"
                />
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <button>save</button>
              </div>
            </div>
          </div>
          <div className="card card-w-title">
            <h1>Prediksi Nilai</h1>
            <DataTable
              value={this.state.dataTable}
              paginatorPosition="both"
              selectionMode="single"
              header="List of Student Grades"
              paginator={true}
              rows={10}
              responsive={true}
              selection={this.state.dataTableSelection}
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
              <Column field="tahun" header="TAHUN" sortable={true} />
              <Column field="sisa_sks" header="Sisa SKS" sortable={true} />
              <Column field="total_sks" header="Total SKS" />
              <Column
                field="total_sks"
                header="Target Wisuda"
                sortable={true}
              />
              <Column field="prodi" header="Prodi" sortable={true} />
              <Column field="fakultas" header="Fakultas" sortable={true} />
            </DataTable>
          </div>
        </div>
      </div>
    );
  }
}
