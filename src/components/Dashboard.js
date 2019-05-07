import React, { Component } from 'react';
import {CarService} from '../service/CarService';
import {Panel} from 'primereact/panel';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {InputText} from 'primereact/inputtext';
import {Chart} from 'primereact/chart';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {FullCalendar} from 'primereact/fullcalendar';

export class Dashboard extends Component {

    render() {
        
        return (
            <div className="p-grid p-fluid dashboard">
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title"> Admin Users</span>
                        <span className="detail">Number of visitors</span>
                        <span className="count visitors">5</span>
                    </div>
                </div>
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">List Mahasiswa</span>
                        <span className="detail">mahasiswa yang sudah terdaftar</span>
                        <span className="count purchases">534</span>
                    </div>
                </div>
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Fakultas</span>
                        <span className="detail">Fakultas & Prodi</span>
                        <span className="count revenue">30</span>
                    </div>
                </div>

               

                <div className="p-col-12 p-lg-12 contacts">
                    <Panel header="List Mahasiswa">
                        <ul>
                            <li>
                                <button className="p-link">
                                    <img src="assets/layout/images/avatar_1.png" width="35" alt="avatar1"/>
                                    <span className="name">Claire Williams</span>
                                    <span className="email">clare@pf-sigma.com</span>
                                </button>
                            </li>
                            <li>
                                <button className="p-link">
                                    <img src="assets/layout/images/avatar_2.png" width="35" alt="avatar2"/>
                                    <span className="name">Jason Dourne</span>
                                    <span className="email">jason@pf-sigma.com</span>
                                </button>
                            </li>
                            <li>
                                <button className="p-link">
                                    <img src="assets/layout/images/avatar_3.png" width="35" alt="avatar3"/>
                                    <span className="name">Jane Davidson</span>
                                    <span className="email">jane@pf-sigma.com</span>
                                </button>
                            </li>
                            <li>
                                <button className="p-link">
                                    <img src="assets/layout/images/avatar_4.png" width="35" alt="avatar4"/>
                                    <span className="name">Tony Corleone</span>
                                    <span className="email">tony@pf-sigma.com</span>
                                </button>
                            </li>
                        </ul>
                    </Panel>
                </div>
                
            </div>
        );
    }
}