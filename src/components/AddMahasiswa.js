import React, { Component } from 'react';
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

    render(){
        return(
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-lg-6">
                    <div className="card card-w-title">
                        <h1>InputText</h1>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="NIM" type="number"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Nama"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Jenis Kelamin"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Tempat Lahir"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Tanggal Lahir"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Asal Sekolah"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Nilai UN"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Tahun Lulus SMA"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Tahun Masuk Kuliah"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Handphone"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Email"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Pekerjaan Orangtua"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Jurusan SMA" />
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Prodi"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Fakultas"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Error" className="p-error"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}