import React, { Component } from "react";
import axios from "axios";
import { Route, Link, Redirect } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { OrganizationChart } from "primereact/organizationchart";
import { Tree } from "primereact/tree";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { PickList } from "primereact/picklist";
import { OrderList } from "primereact/orderlist";
import { FullCalendar } from "primereact/fullcalendar";
import { Panel } from "primereact/panel";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import "./datatraining.css";

export class DataTraining extends Component {
  render() {
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>Data Training</h1>
            <table style={{ border: "1px solid black" }}>
              <thead>
                <tr style={{ border: "1px solid black" }}>
                  <th style={{ border: "1px solid black" }}>IPK</th>
                  <th style={{ border: "1px solid black" }}>IPS</th>
                  <th style={{ border: "1px solid black" }}>SKS</th>
                  <th style={{ border: "1px solid black" }}>Kelayakan</th>
                </tr>
              </thead>
              <tbody style={{ border: "1px solid black" }}>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Tinggi</td>
                  <td style={{ border: "1px solid black" }}>Tinggi</td>
                  <td style={{ border: "1px solid black" }}>Penuh</td>
                  <td style={{ border: "1px solid black" }}>
                    Lulus Tepat Waktu
                  </td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Sedang</td>
                  <td style={{ border: "1px solid black" }}>Sedang</td>
                  <td style={{ border: "1px solid black" }}>Penuh</td>
                  <td style={{ border: "1px solid black" }}>
                    Lulus Tepat Waktu
                  </td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Rendah</td>
                  <td style={{ border: "1px solid black" }}>Rendah</td>
                  <td style={{ border: "1px solid black" }}>Penuh</td>
                  <td style={{ border: "1px solid black" }}>
                    Lulus Tepat Waktu
                  </td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Rendah</td>
                  <td style={{ border: "1px solid black" }}>Rendah</td>
                  <td style={{ border: "1px solid black" }}>Tidak Penuh</td>
                  <td style={{ border: "1px solid black" }}>Tidak Lulus</td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Rendah</td>
                  <td style={{ border: "1px solid black" }}>Sedang</td>
                  <td style={{ border: "1px solid black" }}>Tidak Penuh</td>
                  <td style={{ border: "1px solid black" }}>Tidak Lulus</td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Sedang</td>
                  <td style={{ border: "1px solid black" }}>Rendah</td>
                  <td style={{ border: "1px solid black" }}>Penuh</td>
                  <td style={{ border: "1px solid black" }}>
                    Lulus Tepat Waktu
                  </td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Sedang</td>
                  <td style={{ border: "1px solid black" }}>Rendah</td>
                  <td style={{ border: "1px solid black" }}>Tidak Penuh</td>
                  <td style={{ border: "1px solid black" }}>Tidak Lulus</td>
                </tr>
              </tbody>
            </table>
            <div>
              <p>
                <b>Perhitungan Metode C4.5</b>
              </p>
              <p>
                <b>Entrophy (S) :</b>
              </p>
              <p> ((4/7)*IMLOG2(4/7)+(-3/7)*IMLOG2(3/7))=0,985228136</p>
              <p>
                <b>Gain (S,A) :</b>
              </p>
              <p>
                0,985228136-((1/7)*0)-((3/7)*0,918295834)-((3/7)*0,918295834) =
                0,198117421
              </p>
            </div>
            {/* <div>
              <img src="./gmb/1.png" alt="rumus" />
              <img src="./gmb/2.png" alt="rumus" />
            </div> */}

            <table style={{ border: "1px solid black" }}>
              <thead>
                <tr style={{ border: "1px solid black" }}>
                  <th style={{ border: "1px solid black" }}>Node</th>
                  <th style={{ border: "1px solid black" }} />
                  <th style={{ border: "1px solid black" }} />
                  <th style={{ border: "1px solid black" }}>Jumlah</th>
                  <th style={{ border: "1px solid black" }}>
                    Lulus Tepat Waktu
                  </th>
                  <th style={{ border: "1px solid black" }}>
                    Tidak Lulus Tepat Waktu
                  </th>
                  <th style={{ border: "1px solid black" }}>Entrophy</th>
                  <th style={{ border: "1px solid black" }}>Gain</th>
                </tr>
              </thead>
              <tbody style={{ border: "1px solid black" }}>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }} />
                  <td style={{ border: "1px solid black" }}>Total</td>
                  <td style={{ border: "1px solid black" }} />
                  <td style={{ border: "1px solid black" }}>7</td>
                  <td style={{ border: "1px solid black" }}>4</td>
                  <td style={{ border: "1px solid black" }}>3</td>
                  <td style={{ border: "1px solid black" }} />
                  <td style={{ border: "1px solid black" }} />
                </tr>
                <tr>
                  <td>IPK</td>
                  <td>
                    <tr>
                      <td>.. </td>
                    </tr>
                    <tr>
                      <td>Tinggi</td>
                    </tr>
                    <tr>
                      <td>Sedang </td>
                    </tr>
                    <tr>
                      <td> Rendah</td>
                    </tr>
                  </td>
                  <td>
                    <tr>
                      <td>.. </td>
                    </tr>
                    <tr>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>3 </td>
                    </tr>
                    <tr>
                      <td> 3</td>
                    </tr>
                  </td>
                  <td>
                    <tr>
                      <td>.. </td>
                    </tr>
                    <tr>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>2 </td>
                    </tr>
                    <tr>
                      <td>1</td>
                    </tr>
                  </td>
                  <td>
                    <tr>
                      <td>.. </td>
                    </tr>
                    <tr>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>1 </td>
                    </tr>
                    <tr>
                      <td>2</td>
                    </tr>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
