import React, { Component } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export class EditFK extends Component {
  state = {
    id: null,
    nama: ""
  };

  componentDidMount() {
    var id_sblm = this.props.location.state.fakulID;
    axios.get(`http://localhost:3210/fakultas/${id_sblm}`).then(hasilAmbil => {
      this.setState({
        id: hasilAmbil.data[0].id,
        nama: hasilAmbil.data[0].nama
      });
    });
  }

  value() {
    var url1 = "http://localhost:3210/fakultas/edit";
    axios
      .post(url1, {
        id: this.refs.id.value,
        nama: this.refs.nama.value
      })
      .then(() => {
        alert("data sukses di SUBMIT");
      });
  }

  updateData = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", this.state.id);
    formData.append("nama", this.state.nama);

    axios.post(
      `http://localhost:3210/fakultas/edit/` + this.refs.id.value,
      formData
    );
  };

  render() {
    return (
      <div className="container">
        <form
          className="form-horizontal"
          onSubmit={this.updateData}
          encType="multipart/form-data"
        >
          <fieldset>
            <legend>Edit Data</legend>
            <input
              type="hidden"
              className="form-control"
              ref="id"
              defaultValue={this.state.id}
            />

            <div className="form-group">
              <label className="col-lg-2 control-label">Nama Fakultas</label>
              <div className="col-lg-10">
                <input
                  ref="nama"
                  type="text"
                  className="form-control"
                  defaultValue={this.state.nama}
                  placeholder="Nama fakultas ..."
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <Link
                  to={{
                    pathname: "/list/"
                  }}
                  className="btn btn-success"
                >
                  <i className="fa fa-remove">&nbsp;</i>Cancel
                </Link>
                &nbsp;
                <button type="reset" className="btn btn-warning">
                  <i className="fa fa-repeat">&nbsp;</i>Reset
                </button>
                &nbsp;
                <button
                  type="submit"
                  onClick={() => this.value(this.refs)}
                  className="btn btn-primary"
                >
                  <i className="fa fa-paper-plane" /> Submit
                </button>
                &nbsp;
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
