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
                  <th style={{ border: "1px solid black" }}>Attribut</th>
                  <th style={{ border: "1px solid black" }}>Keterangan</th>
                  <th style={{ border: "1px solid black" }}>Variabel</th>
                </tr>
              </thead>
              <tbody style={{ border: "1px solid black" }}>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Jenis Kelamin</td>
                  <td style={{ border: "1px solid black" }}>
                    <tr style={{ border: "1px solid black" }}>Pria</tr>
                    <tr style={{ border: "1px solid black" }}>Wanita</tr>
                  </td>
                  <td style={{ border: "1px solid black" }}>X1</td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Umur</td>
                  <td style={{ border: "1px solid black" }}>
                    <tr style={{ border: "1px solid black" }}> 19-24 </tr>
                    <tr style={{ border: "1px solid black" }}>25-30 </tr>
                    <tr style={{ border: "1px solid black" }}> 31-36 </tr>
                    <tr style={{ border: "1px solid black" }}> 37-42 </tr>
                    <tr style={{ border: "1px solid black" }}> 43-48 </tr>
                    <tr style={{ border: "1px solid black" }}> 49-54 </tr>
                    <tr style={{ border: "1px solid black" }}> 55-60 </tr>
                  </td>
                  <td style={{ border: "1px solid black" }}>X2</td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Pekerjaan</td>
                  <td style={{ border: "1px solid black" }}>
                    <tr style={{ border: "1px solid black" }}>Wiraswasta</tr>
                    <tr style={{ border: "1px solid black" }}>
                      Karyawan Swasta
                    </tr>
                    <tr style={{ border: "1px solid black" }}>PNS</tr>
                  </td>
                  <td style={{ border: "1px solid black" }}>X3</td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Penghasilan</td>
                  <td style={{ border: "1px solid black" }}>
                    <tr style={{ border: "1px solid black" }}>1-5 Juta</tr>
                    <tr style={{ border: "1px solid black" }}>6-10 Juta</tr>
                    <tr style={{ border: "1px solid black" }}>11-15 Juta</tr>
                    <tr style={{ border: "1px solid black" }}>> 15 Juta</tr>
                  </td>
                  <td style={{ border: "1px solid black" }}>X4</td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Status Rumah</td>
                  <td style={{ border: "1px solid black" }}>
                    <tr style={{ border: "1px solid black" }}>Orang Tua</tr>
                    <tr style={{ border: "1px solid black" }}>
                      Sendiri (Cicil)
                    </tr>
                    <tr style={{ border: "1px solid black" }}>
                      Sendiri (Lunas)
                    </tr>
                  </td>
                  <td style={{ border: "1px solid black" }}>X5</td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Status Marital</td>
                  <td style={{ border: "1px solid black" }}>
                    <tr style={{ border: "1px solid black" }}>Belum Menikah</tr>
                    <tr style={{ border: "1px solid black" }}>Menikah</tr>
                  </td>
                  <td style={{ border: "1px solid black" }}>X6</td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Jumlah Anak</td>
                  <td style={{ border: "1px solid black" }}>
                    <tr style={{ border: "1px solid black" }}>0</tr>
                    <tr style={{ border: "1px solid black" }}>1</tr>
                    <tr style={{ border: "1px solid black" }}>2</tr>
                    <tr style={{ border: "1px solid black" }}>3</tr>
                    <tr style={{ border: "1px solid black" }}>>3</tr>
                  </td>
                  <td style={{ border: "1px solid black" }}>X7</td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>
                    Metode Pembayaran
                  </td>
                  <td style={{ border: "1px solid black" }}>
                    <tr style={{ border: "1px solid black" }}>Debit Card</tr>
                    <tr style={{ border: "1px solid black" }}>Credit Card</tr>
                  </td>
                  <td style={{ border: "1px solid black" }}>X8</td>
                </tr>
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>Kategori</td>
                  <td style={{ border: "1px solid black" }}>
                    <tr style={{ border: "1px solid black" }}>Member</tr>
                    <tr style={{ border: "1px solid black" }}>Non Member</tr>
                  </td>
                  <td style={{ border: "1px solid black" }}>X9</td>
                </tr>
              </tbody>
            </table>
            <div>
              <p>
                <b>Perhitungan Metode Naïve Bayes Pada Data Test Diatas</b>
              </p>
              <p>
                P ( Y = Member ) = 7/10 = 0.7 P ( Y = Non-Member ) = 3/10 = 0.3
              </p>
            </div>
            <div>
              <p>
                <b>Mencari Nilai Probabilitas Pada Tiap Atribut</b>
              </p>
              <p>P ( Jenis Kelamin = P | Y = Member ) = 6/7 = 0.857</p>
              <p>P ( Umur = P| Y = Member ) = 2/7 = 0.285</p>
              <p>P ( Pekerjaan = Swasta | Y = Member) = 2/7 = 0.285</p>
              <p>P ( Penghasilan = 5-10 Juta | Y = Member ) = 0/7= 0</p>
              <p>P ( Status Rumah = Orang Tua | Y = Member ) = 1/7 = 0.142</p>
              <p>
                P ( Status Marital = Belum Menikah | Y = Member ) = 3/7 = 0.428
              </p>
              <p>
                P ( Jumlah Anak = 0 | Y = Member ) = 3/7 = 0.428 P ( Metode
                Pembayaran = Debit Card | Y = Member ) = 3/7 = 0.428
              </p>
              <p>P ( Jenis Kelamin = P | Y = Non-Member ) = 2/3 = 0.666</p>
              <p>P ( Umur = P | Y =Non-Member ) = 1/3 = 0.333</p>
              <p>P ( Pekerjaan = Swasta | Y = Non-Member ) = 3/7 = 1</p>
              <p>P ( Penghasilan = 5-10 Juta | Y = Non-Member ) = 3/3 = 1</p>
              <p>
                P ( Status Rumah = Orang Tua | Y = Non-Member ) = 1/3 = 0.333
              </p>
              <p>
                P ( Status Marital = Belum Menikah | Y = Non-Member ) = 3/3 = 1
              </p>
              <p>P ( Jumlah Anak = 0 | Y = Non-Member) = 3/3 = 1</p>
              <p>
                P ( Metode Pembayaran = Debit Card | Y = Non-Member) = 3/3 = 1
              </p>
            </div>
            <div>
              <p>
                <b> Menghitung Hasil dari Atribut Member dan Non-Member</b>
              </p>
              <p>
                P ( Kategori = Member) * P ( Y = Member ) = 0 P ( Kategori =
                Non-Member) * P ( Y = Non-Member ) = 0.02215
              </p>
            </div>
            <div>
              <p>
                <b>
                  Kesimpulan hasil yang diperoleh dari perhitungan menunjukan
                  bahwa masukan dari Data Test menghasilkan (P = Non-Member)
                  dengan hasil probabilitas tertinggi.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
