import React, { Component } from 'react';


import axios from 'axios';
import { Link, Route, Redirect } from 'react-router-dom';
import Side_Menu from "./Side_Menu";

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default class CrudMahasiswa extends Component {

    constructor() {
        super();
        this.state = {
            dataM:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3210/mahasiswa')
        .then((ambilAllData)=>{
            console.log(ambilAllData)
            this.setState({
                dataM: ambilAllData.data
            })
        })
    }

    // save() {
    //     let cars = [...this.state.cars];
    //     if(this.newCar)
    //         cars.push(this.state.car);
    //     else
    //         cars[this.findSelectedCarIndex()] = this.state.car;

    //     this.setState({cars:cars, selectedCar:null, car: null, displayDialog:false});
    // }

    // delete() {
    //     let index = this.findSelectedCarIndex();
    //     this.setState({
    //         cars: this.state.cars.filter((val,i) => i !== index),
    //         selectedCar: null,
    //         car: null,
    //         displayDialog: false});
    // }

    // findSelectedCarIndex() {
    //     return this.state.cars.indexOf(this.state.selectedCar);
    // }

    // updateProperty(property, value) {
    //     let car = this.state.car;
    //     car[property] = value;
    //     this.setState({car: car});
    // }

    // onCarSelect(e){
    //     this.newCar = false;
    //     this.setState({
    //         displayDialog:true,
    //         car: Object.assign({}, e.data)
    //     });
    // }

    // addNew() {
    //     this.newCar = true;
    //     this.setState({
    //         car: {vin:'', year: '', brand: '', color: ''},
    //         displayDialog: true
    //     });
    // }

    render() {
        // let header = <div className="p-clearfix" style={{lineHeight:'1.87em'}}>CRUD for Cars </div>;

        // let footer = <div className="p-clearfix" style={{width:'100%'}}>
        //     <Button style={{float:'left'}} label="Add" icon="pi pi-plus" onClick={this.addNew}/>
        // </div>;

        // let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
        //         <Button label="Delete" icon="pi pi-times" onClick={this.delete}/>
        //         <Button label="Save" icon="pi pi-check" onClick={this.save}/>
        //     </div>;
        var tampilAll = this.state.dataM.map((item, index)=>{
            var nim = item.nim;
            var nama = item.nama;
            var jenis_kelamin = item.jenis_kelamin;
            var tempat_lahir = item.tempat_lahir;
            var tanggal_lahir = item.tanggal_lahir;
            var asal_sekolah = item.asal_sekolah;
            var nilai_UN = item.nilai_UN;
            var tahun_lulus = item.tahun_lulus;
            var tahun_masuk_kuliah = item.tahun_masuk_kuliah;
            var no_hp = item.no_hp;
            var email = item.email;
            var pekerjaan_orangtua = item.pekerjaan_orangtua;
            var jurusan_sekolah = item.jurusan_sekolah;
            var nama_prodi = item.nama_prodi;
            var total_sks = item.total_sks;
            var fakultas = item.fakultas;

            return <tr key={index} style={{textAlign: 'center'}}>
                        <td>{nim}</td>
                        <td>{nama}</td>
                        <td>{jenis_kelamin}</td>
                        <td>{tempat_lahir}</td>
                        <td>{tanggal_lahir}</td>
                        <td>{asal_sekolah}</td>
                        <td>{nilai_UN}</td>
                        <td>{tahun_lulus}</td>
                        <td>{tahun_masuk_kuliah}</td>
                        <td>{no_hp}</td>
                        <td>{email}</td>
                        <td>{pekerjaan_orangtua}</td>
                        <td>{jurusan_sekolah}</td>
                        <td>{nama_prodi}</td>
                        <td>{total_sks}</td>
                        <td>{fakultas}</td>
            </tr>
        })
        return (
            <div className="wrapper p-grid">
                <Side_Menu className="p-col-12 p-md-3" style ={{float: "left"}}/>
                <div className="content-wrapper" style={{width: "70%", float: "left"}}>
                    <h1>DataTable</h1>
                    <p>This samples demonstrates a CRUD implementation using various PrimeReact components.</p>
                    <section className="content" >
                        <div className="row" >
                            <div className="p-col-12 p-md-9" >
                                <div className="box ">
                                    <div className="box-body">
                                        <table className="table table-bordered table-striped" >
                                        <thead>
                                            <tr>
                                            <th style={{textAlign: 'center'}}>NIM</th>
                                            <th style={{textAlign: 'center'}}>Nama</th>
                                            <th style={{textAlign: 'center'}}>Jenis Kelamin</th>
                                            <th style={{textAlign: 'center'}}>Tempat Lahir</th>
                                            <th style={{textAlign: 'center'}}>Tanggal Lahir</th>
                                            <th style={{textAlign: 'center'}}>Asal Sekolah</th>
                                            <th style={{textAlign: 'center'}}>Nilai UN</th>
                                            <th style={{textAlign: 'center'}}>Tahun Lulus</th>
                                            <th style={{textAlign: 'center'}}>Tahun Masuk Kuliah</th>
                                            <th style={{textAlign: 'center'}}>No Handphone</th>
                                            <th style={{textAlign: 'center'}}>Email</th>
                                            <th style={{textAlign: 'center'}}>Pekerjaan Orangtua</th>
                                            <th style={{textAlign: 'center'}}>Jurusan Sekolah</th>
                                            <th style={{textAlign: 'center'}}>Nama Prodi</th>
                                            <th style={{textAlign: 'center'}}>Total SKS</th>
                                            <th style={{textAlign: 'center'}}>Fakultas</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tampilAll}
                                        </tbody>
                                        </table>
                                    </div>
                                {/* /.box-body */}
                                </div>
                                {/* /.box */}
                            </div>
                        </div>
                    </section>
                </div>

                {/* <div>
                    <DataTable>
                        <Column field="vin" header="Vin" sortable={true} />
                        <Column field="year" header="Year" sortable={true} />
                        <Column field="brand" header="Brand" sortable={true} />
                        <Column field="color" header="Color" sortable={true} />
                    </DataTable>

                    <Dialog visible={this.state.displayDialog} width="300px" header="Car Details" modal={true} footer={dialogFooter} onHide={() => this.setState({displayDialog: false})}>
                        {
                            this.state.car && 
                            
                            <div className="p-grid p-fluid">
                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="vin">Vin</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="vin" onChange={(e) => {this.updateProperty('vin', e.target.value)}} value={this.state.car.vin}/>
                                </div>

                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="year">Year</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="year" onChange={(e) => {this.updateProperty('year', e.target.value)}} value={this.state.car.year}/>
                                </div>

                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="brand">Brand</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="brand" onChange={(e) => {this.updateProperty('brand', e.target.value)}} value={this.state.car.brand}/>
                                </div>
                                
                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="color">Color</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="color" onChange={(e) => {this.updateProperty('color', e.target.value)}} value={this.state.car.color}/>
                                </div>
                            </div>
                        }
                    </Dialog>
                </div> */}

                {/* <DataTableCrudDoc/> */}

            </div>
        );
    }
}