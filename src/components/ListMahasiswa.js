import React, {Component} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import {DataTable} from 'primereact/datatable';
import {OrganizationChart} from 'primereact/organizationchart';
import {Tree} from 'primereact/tree';
import {TreeTable} from 'primereact/treetable';
import {Column} from 'primereact/column'
import {PickList} from 'primereact/picklist';
import {OrderList} from 'primereact/orderlist';
import {FullCalendar} from 'primereact/fullcalendar';
import {Panel} from 'primereact/panel';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {DataView, DataViewLayoutOptions} from 'primereact/dataview';
// import {AddMahasiswa} from './AddMahasiswa';


export class ListMahasiswa extends Component{
    constructor(){
        super();
        this.state ={
            dataTableValue:[]
        };
        // this.createdMenu();
    }
    componentDidMount() {
        axios.get('http://localhost:3210/mahasiswa')
        .then((getdata)=>{
            this.setState({
                dataTableValue: getdata.data
            })
        })
    }


    render(){
        let footer = <div className="p-clearfix" style={{width:'100%'}}>
        <Button style={{float:'left'}} label="Add" icon="pi pi-plus" />
        </div>;
        return(
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card card-w-title">
                        <h1>DataTable</h1>
                        <DataTable value={this.state.dataTableValue} paginatorPosition="both" selectionMode="single" footer={footer} header="List of Studens Registered" paginator={true} rows={10}
                            responsive={true} selection={this.state.dataTableSelection} onSelectionChange={event => this.setState({dataTableSelection: event.value})}>
                            <Column field="nim" header="NIM" sortable={true}/>
                            <Column field="nama" header="Nama" sortable={true}/>
                            <Column field="jenis_kelamin" header="Jenis Kelamin" sortable={true}/>
                            <Column field="nama_prodi" header="Prodi" sortable={true}/>
                            <Column field="fakultas" header="Fakultas" sortable={true}/>
                            <Column field="total_sks" header="Total SKS" sortable={true}/>
                            {/* <Column header="Action" onSelectionChange={window.location = `https://localhost:3210/mahasiswa/:${this.state.dataTableValue.nim}`}/> */}
                        </DataTable>
                        
                    </div>
                </div>

            </div>
        )
    }
}