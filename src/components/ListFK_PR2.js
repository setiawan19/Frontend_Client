import React, { Component } from 'react';
import axios from 'axios';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Column} from 'primereact/column'
import {DataTable} from 'primereact/datatable';


export class ListFK_PR extends Component{
    constructor(){
        super();
        this.state = {
            dataFK:[],
            dataPR:[]
        };
    }
    componentDidMount() {
        axios.get('http://localhost:3210/fakultas')
        .then((getFK)=>{
            this.setState({
                dataFK: getFK.data
            })
        });
        axios.get('http://localhost:3210/prodi')
        .then((getPR)=>{
            this.setState({
                dataPR: getPR.data
            })
        })
    }
    render(){
        return(
            <div className="p-grid p-fluid">
                <div className="p-col-12 card card-w-title">
                    <h1>List Data Jurusan Kampus</h1>
                    <div className="p-col-12 p-md-12">
                        <DataTable value={this.state.dataFK} header="List Fakultas" rows={10}
                                responsive={true} selection={this.state.dataTableSelection} onSelectionChange={event => this.setState({dataTableSelection: event.value})}>
                                <Column field="id" header="id" sortable={true}/>
                                <Column field="nama" header="Nama" sortable={true}/>
                                <Column field="edit" header="Edit"/>
                                <Column field="delete" header="Delete"/>
                        </DataTable>
                    </div>
                    <div className="p-col-12 p-md-12">
                        <DataTable value={this.state.dataPR} header="List Prodi" rows={10}
                                responsive={true} selection={this.state.dataTableSelection} onSelectionChange={event => this.setState({dataTableSelection: event.value})}>
                                <Column field="id" header="id" sortable={true}/>
                                <Column field="nama" header="Nama" sortable={true}/>
                                <Column field="total_sks" header="Total SKS" sortable={true}/>
                                <Column field="id_fk" header="id_fk" sortable={true}/>
                                <Column field="edit" header="Edit"/>
                                <Column field="delete" header="Delete"/>
                        </DataTable>
                    </div>
                </div>
            </div>
        )
    }
}