import React, { Component } from 'react';
import axios from 'axios';
import {InputText} from 'primereact/inputtext';
import {AutoComplete} from 'primereact/autocomplete';
import {Calendar} from 'primereact/calendar';
import {RadioButton} from 'primereact/radiobutton';
import {Dropdown} from 'primereact/dropdown';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';
import {ListBox} from 'primereact/listbox';
import {Rating} from 'primereact/rating';
import {ColorPicker} from 'primereact/colorpicker';
import {Editor} from 'primereact/editor';
import {ToggleButton} from 'primereact/togglebutton';
import {SelectButton} from 'primereact/selectbutton';

export class AddMahasiswa extends Component{
    constructor(){
        super();
        this.state={
            date1: null,
            radioValue: null,
            dropdownProdi: null,
            dropdownFakultas: null,
            ratingValue: null
        }
    }
    saveData(e){
        e.preventDefault();
        var url = 'http://localhost:3210/mahasiswa';
        axios.post(url, {
            nim: this.nim.value,
            nama: this.nama.value,
            jenis_kelamin: this.jenis_kelamin.value,
            tempat_lahir: this.tempat_lahir.value,
            tanggal_lahir: this.tanggal_lahir.value,
            asal_sekolah: this.asal_sekolah.value,
            nilai_UN: this.nilai_UN.value,
            tahun_lulus: this.tahun_lulus.value,
            tahun_masuk_sekolah: this.tahun_masuk_sekolah.value,
            no_hp: this.no_hp.value,
            email: this.email.value,
            pekerjaan_orangtua: this.pekerjaan_orangtua.value,
            jurusan_sekolah: this.jurusan_sekolah.value,
            id_prodi: this.id_prodi.value
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        this.nim.value = ''; this.nama.value = ''; this.jenis_kelamin.value = '';
        this.tempat_lahir.value = ''; this.tanggal_lahir.value = ''; this.asal_sekolah.value = '';
        this.nilai_UN.value=''; this.tahun_lulus.value = ''; this.tahun_masuk_sekolah.value =''; 
        this.no_hp.value=''; this.email.value = ''; this.pekerjaan_orangtua.value=''; 
        this.jurusan_sekolah.value=''; this.id_prodi.value='';
    }
    
    render(){
        return(
            <div className="p-grid p-fluid">
                <div className="p-col-12 card card-w-title">
                    <h1>Add Data Mahasiswa</h1>
                </div>
                <div className="p-col-6">
                    <div className="card card-w-title">
                        <h4>Personal</h4>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-6">
                                <InputText placeholder="NIM" type="number" ref={ in_nim => this.nim = in_nim }/>
                            </div>
                            <div className="p-col-12 p-md-6">
                                <InputText placeholder="Nama" type="text" ref={ in_nama => this.nama = in_nama }/>
                            </div>
                            <div className="p-col-12 p-md-6">
                                <InputText placeholder="Tempat Lahir" type="text" ref={ in_tmpt => this.tempat_lahir = in_tmpt }/>
                            </div>
                            <div className="p-col-12 p-md-6" >
                                <Calendar placeholder="Tanggal Lahir" dateFormat="yy/mm/dd" ref={ in_date => this.tanggal_lahir = in_date } value={this.state.date1} onChange={(e) => this.setState({date1: e.value})}/>
                            </div>
                            
                            <div className="p-col-12 p-md-6">
                                <InputText placeholder="Pekerjaan Orangtua" ref={ in_krj => this.pekerjaan_orangtua = in_krj }/>
                            </div>
                            <div className="p-col-12 p-md-12">
                                <label>Jenis Kelamin </label>
                                <div className="p-col-12 p-md-6">
                                    <RadioButton value="Laki-Laki" inputId="rb1" ref={ in_laki => this.jenis_kelamin = in_laki } onChange={event => this.setState({radioValue: event.value})} checked={this.state.radioValue === "Laki-Laki"}/>
                                    <label htmlFor="rb1" className="p-radiobutton-label">Laki-Laki</label> &nbsp; &nbsp;
                                    <RadioButton value="Perempuan" inputId="rb2" ref={ in_cw => this.jenis_kelamin = in_cw } onChange={event => this.setState({radioValue: event.value})} checked={this.state.radioValue === "Perempuan"}/>
                                    <label htmlFor="rb2" className="p-radiobutton-label">Perempuan</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="p-col-6">
                    <div className="card card-w-title">
                        <h4>Contact</h4>
                        <div className="p-col-12 p-md-6">
                            <InputText placeholder="Handphone" type="number" ref={ in_hp => this.no_hp = in_hp }/>
                        </div>
                        <div className="p-col-12 p-md-6">
                            <InputText placeholder="Email" type="email" ref={ in_email => this.email = in_email }/>
                        </div>
                    </div>
                </div>
                <div className="p-col-6">
                    <div className="card card-w-title">
                        <h4>Pendidikan</h4>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-6">
                                <InputText placeholder="Asal Sekolah" ref={ in_sklh => this.asal_sekolah = in_sklh }/>
                            </div>
                            <div className="p-col-12 p-md-6">
                                <InputText placeholder="Jurusan SMA" ref={ in_jrsn => this.jurusan_sekolah = in_jrsn }/>
                            </div>
                            <div className="p-col-12 p-md-6">
                                <InputText placeholder="Nilai UN" type="number" ref={ in_nilai => this.nilai_UN = in_nilai }/>
                            </div>
                            <div className="p-col-12 p-md-6">
                                <InputText placeholder="Tahun Lulus SMA" type="number" ref={ in_smalulus => this.tahun_lulus = in_smalulus }/>
                            </div>
                            <div className="p-col-12 p-md-6">
                                <InputText placeholder="Tahun Masuk Kuliah" type="number" ref={ in_msk => this.tahun_masuk_sekolah = in_msk }/>
                            </div>   
                            <div className="p-col-12 p-md-6">
                                <Dropdown placeholder="Prodi" value="2" ref={ in_msk => this.id_prodi = in_msk }/>
                            </div>
                            <div className="p-col-12 p-md-6">
                                <Dropdown placeholder="Fakultas"/>
                            </div>                     
                        </div>
                    </div>
                </div>
                <div className="p-col-12">
                    <div className="p-col-3">
                        <Button label="Save" icon="pi pi-plus" onClick={this.saveData.bind(this)}/>
                    </div>
                </div>
                
            </div>
        )
    }
}