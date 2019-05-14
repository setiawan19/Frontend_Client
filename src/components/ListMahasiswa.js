import React, {Component} from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
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
        this.state = {
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

    deleteData = (e) => {
        window.confirm("Delete this Product ?");
        axios.post(`http://localhost:3210/mahasiswa/${this.state.dataTableValue.nim}`, {

    }).then((ambilData) => {
          if(ambilData){
            axios.get('http://localhost:3210/mahasiswa')
            .then((ambilData) => {
              this.setState({
                dataproduk: ambilData.data
              })
            })
          }
        })
        window.alert("Success Delete !")
      }

    render(){
        // let list_mhs = this.state.dataTableValue.map((item, index)=>{
        //     var nim = item.nim;
        //     var nama = item.nama;
        //     var jenis_kelamin = item.jenis_kelamin;
        //     var prodi = item.prodi;
        //     var fakultas = item.fakultas;
        //     var total_sks = item.total_sks;
        //     return <tr key={index} style={{textAlign: 'center'}}>
        //         <td>{nim}</td> <td>{nama}</td> <td>{jenis_kelamin}</td>
        //         <td>{prodi}</td> <td>{fakultas}</td> <td>{total_sks}</td>
        //         <td>
        //         <span>
        //           <Link to={{ pathname:'/editmahasiswa', state: {nim: nim}}} className="btn btn-warning" style={{marginBottom:40}}><i className="fa fa-pencil-square"></i></Link>  
        //           <button onClick={() => this.deleteData(nim)} className="btn btn-danger"><i className="fa fa-times" aria-hidden="true"></i></button>  
        //         </span> 
        //         </td>
        //     </tr>
        // })
        let footer = <div className="p-clearfix" style={{width:'100%'}}>
        <button style={{float:'left'}} className="pi pi-plus btn btn-primary"><Link to="/AddMahasiswa">Add</Link></button>
        </div>;
        return(
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card card-w-title">
                        <h1>DataTable</h1>
                        <DataTable value={this.state.dataTableValue} paginatorPosition="both" selectionMode="single" footer={footer} header="List of Studens Registered" paginator={true} rows={10}
                            responsive={true} selection={this.state.dataTableSelection} onSelectionChange={event => this.setState({dataTableSelection: event.value})}>
                            <Column field="nim" header="NIM" sortable={true} />
                            <Column field="nama" header="Nama" sortable={true}/>
                            <Column field="jenis_kelamin" header="Jenis Kelamin" sortable={true}/>
                            <Column field="nama_prodi" header="Prodi" sortable={true}/>
                            <Column field="fakultas" header="Fakultas" sortable={true}/>
                            <Column field="total_sks" header="Total SKS" sortable={true}/>
                            <Column header="Edit" onClick={this.deleteData}/>
                            <Column header="Delete" onClick={this.deleteData}/>
                        </DataTable> 
                        {/* <table>
                            <thead>
                                <tr>
                                    <th>NIM</th>
                                    <th>Nama</th>
                                    <th>Jenis Kelamin</th>
                                    <th>Prodi</th>
                                    <th>Fakultas</th>
                                    <th>Total SKS</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list_mhs}
                            </tbody>
                        </table> */}
                    </div>
                </div>

            </div>
        )
    }
}