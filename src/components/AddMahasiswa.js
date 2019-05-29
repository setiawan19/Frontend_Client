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
            ratingValue: null,
            dataProdi: [],
            dataFakultas: [],
            nim: '', nama : '', jenis_kelamin : '', tempat_lahir : '', tanggal_lahir : '',
            asal_sekolah : '', nilai_UN : '', tahun_lulus : '', tahun_masuk_kuliah : '',
            no_hp : '', email : '', pekerjaan_orangtua : '', jurusan_sekolah: '', id_prodi : ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3210/prodifk')
        .then((getdata)=>{
            this.setState({
                dataProdi: getdata.data
            })
        })
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
            tahun_masuk_kuliah: this.tahun_masuk_kuliah.value,
            no_hp: this.no_hp.value,
            email: this.email.value,
            pekerjaan_orangtua: this.pekerjaan_orangtua.value,
            jurusan_sekolah: this.jurusan_sekolah,
            id_prodi: 1
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        // this.nim.value = ''; this.nama.value = ''; this.jenis_kelamin.value = '';
        // this.tempat_lahir.value = ''; this.tanggal_lahir.value = ''; this.asal_sekolah.value = '';
        // this.nilai_UN.value=''; this.tahun_lulus.value = ''; this.tahun_masuk_kuliah.value =''; 
        // this.no_hp.value=''; this.email.value = ''; this.pekerjaan_orangtua.value=''; 
        // this.jurusan_sekolah.value=''; this.id_prodi.value='';
    }
    
    kirimData = (e) => {
        e.preventDefault()
        let formproduk = new FormData();
        formproduk.append('nim', this.state.nim);
        formproduk.append('nama', this.state.nama);
        formproduk.append('jenis_kelamin', this.state.jenis_kelamin);
        formproduk.append('tempat_lahir', this.state.tempat_lahir);
        formproduk.append('tanggal_lahir', this.state.tanggal_lahir);
        formproduk.append('asal_sekolah', this.state.asal_sekolah);
        formproduk.append('nilai_UN', this.state.nilai_UN);
        formproduk.append('tahun_masuk_sekolah', this.state.tahun_masuk_kuliah);
        formproduk.append('no_hp', this.state.no_hp);
        formproduk.append('email', this.state.email);
        formproduk.append('pekerjaan_orangtua', this.state.pekerjaan_orangtua);
        formproduk.append('jurusan_sekolah', this.state.jurusan_sekolah);
        // formproduk.append('id_prodi', this.state.id_prodi);
  
        axios.post('http://localhost:3210/mahasiswa', formproduk)
        window.location.href = "/list_mahasiswa";
    }
    
    test(){
        console.log(this.state.nim)
        console.log(this.state.nama)
        console.log(this.dataProdi.prodi)
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
                            <div className="p-col-12 p-md-12 form-group">
                                <InputText className="form-control" placeholder="NIM" type="number" value={this.state.nim} 
                                onChange={e => this.setState({nim: e.target.value })}/>
                            </div>
                            <div className="p-col-12 p-md-12 form-group">
                                <InputText className="form-control" placeholder="Nama" type="text" value={this.state.nama}
                                onChange={e => this.setState({nama: e.target.value })}/>
                            </div>
                            <div className="p-col-12 p-md-12 form-group">
                                <InputText className="form-control" placeholder="Tempat Lahir" type="text" 
                                    value={this.state.tempat_lahir}
                                    onChange={e => this.setState({tempat_lahir: e.target.value })}/>
                            </div>
                            <div className="p-col-12 p-md-12 form-group" >
                                <Calendar className="form-control" placeholder="Tanggal Lahir" dateFormat="yy/mm/dd" 
                                    value={this.state.tanggal_lahir}
                                    onChange={e => this.setState({tanggal_lahir: e.target.value })}/>
                            </div>
                            
                            <div className="p-col-12 p-md-12 form-group">
                                <InputText className="form-control" placeholder="Pekerjaan Orangtua" value={this.state.pekerjaan_orangtua}
                                onChange={e => this.setState({pekerjaan_orangtua: e.target.value })}/>
                            </div>
                            <div className="p-col-12 p-md-12">
                                <label>Jenis Kelamin </label>
                                <div className="p-col-12 p-md-12 form-group">
                                    <RadioButton className="form-control" value="Laki-Laki" inputId="rb1" onChange={event => this.setState({jenis_kelamin: event.value})} checked={this.state.jenis_kelamin === "Laki-Laki"}/>
                                    <label htmlFor="rb1" className="p-radiobutton-label">Laki-Laki</label> &nbsp; &nbsp;
                                    <RadioButton className="form-control" value="Perempuan" inputId="rb2" onChange={event => this.setState({jenis_kelamin: event.value})} checked={this.state.jenis_kelamin === "Perempuan"}/>
                                    <label htmlFor="rb2" className="p-radiobutton-label">Perempuan</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="p-col-6">
                    <div className="card card-w-title">
                        <h4>Contact</h4>
                        <div className="p-col-12 p-md-12 form-group">
                            <InputText className="form-control" placeholder="Handphone" type="number" value={this.state.no_hp}
                                onChange={e => this.setState({no_hp: e.target.value })}/>
                        </div>
                        <div className="p-col-12 p-md-12 form-group">
                            <InputText className="form-control" placeholder="Email" type="email" value={this.state.no_hp}
                                onChange={e => this.setState({no_hp: e.target.value })}/>
                        </div>
                    </div>
                </div>
                <div className="p-col-6">
                    <div className="card card-w-title">
                        <h4>Pendidikan</h4>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-12 form-group">
                                <InputText className="form-control" placeholder="Asal Sekolah" value={this.state.asal_sekolah}
                                onChange={e => this.setState({asal_sekolah: e.target.value })}/>
                            </div>
                            <div className="p-col-12 p-md-12 form-group">
                                <InputText className="form-control" placeholder="Jurusan SMA" value={this.state.jurusan_sekolah}
                                onChange={e => this.setState({jurusan_sekolah: e.target.value })}/>
                            </div>
                            <div className="p-col-12 p-md-12 form-group">
                                <InputText className="form-control" placeholder="Nilai UN" type="number" value={this.state.nilai_UN}
                                onChange={e => this.setState({nilai_UN: e.target.value })}/>
                            </div>
                            <div className="p-col-12 p-md-12 form-group">
                                <InputText className="form-control" placeholder="Tahun Lulus SMA" type="number" value={this.state.tahun_lulus}
                                onChange={e => this.setState({tahun_lulus: e.target.value })}/>
                            </div>
                            <div className="p-col-12 p-md-12 form-group">
                                <InputText className="form-control" placeholder="Tahun Masuk Kuliah" type="number" value={this.state.tahun_masuk_kuliah}
                                onChange={e => this.setState({tahun_masuk_kuliah: e.target.value })}/>
                            </div>   
                            <div className="p-col-12 p-md-12 form-group">
                                <Dropdown className="form-control" placeholder="Prodi" 
                                    options={this.state.dataProdi.nama} value={this.state.id_prodi} onChange={event => this.setState({id_prodi: event.value})} autoWidth={false}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-col-12">
                    <div className="p-col-3">
                        <Button label="Save" icon="pi pi-plus" onClick={() => this.saveData()}/>
                    </div>
                </div>
                
            </div>
        )
    }
}