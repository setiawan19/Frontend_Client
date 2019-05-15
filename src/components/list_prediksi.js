import React, {Component} from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import {Column} from 'primereact/column'
import {DataTable} from 'primereact/datatable';

import {DataView, DataViewLayoutOptions} from 'primereact/dataview';

export class ListPrediksi extends Component{
    constructor(){
        super();
        this.state={
            dataTable:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3210/view_sks')
        .then((getdata)=>{
            this.setState({
                dataTable: getdata.data
            })
        }) 
    }

    render(){
        return(
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card card-w-title">
                        <h1>List Prediksi Nilai</h1>
                        <DataTable value={this.state.dataTable} paginatorPosition="both" selectionMode="single" header="List of Studens Registered" paginator={true} rows={10}
                            responsive={true} selection={this.state.dataTableSelection} onSelectionChange={event => this.setState({dataTableSelection: event.value})}>
                            <Column field="nim" header="NIM" sortable={true} />
                            <Column field="nama" header="Nama" sortable={true}/>
                            <Column field="prodi" header="Prodi" sortable={true}/>
                            <Column field="fakultas" header="Fakultas" sortable={true}/>
                            <Column field="total_sks" header="Total SKS" sortable={true}/>
                            <Column field="sks_lulus" header="Total SKS Lulus" sortable={true}/>
                            <Column field="IPS" header="IPS" sortable={true}/>
                            <Column field="IPK" header="Total SKS Lulus" sortable={true}/>
                            <Column header="Action" value="detail"/>
                        </DataTable> 
                    </div>
                </div>
            </div>
        )
    }
}