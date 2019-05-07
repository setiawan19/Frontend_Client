import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';

import {PanelMenu} from 'primereact/panelmenu';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default class Side_Menu extends Component {
    constructor() {
        super();
        this.state = {
            items:[
                {
                   label:'Master',
                   icon:'pi pi-fw pi-file',
                   items:[
                      {
                        label:'Users',
                        icon:'pi pi-fw pi-user'
                      },
                      {
                        label:'Mahasiswa',
                        icon:'pi pi-fw pi-user',
                        Link: '/mahasiswa'
                      },
                      {
                        label:'Fakultas & Prodi',
                        icon:'pi pi-fw pi-user'
                      }
                   ]
                },
                {
                    label:'Prediksi Kelulusan',
                    icon:'pi pi-fw pi-calendar',
                    items:[
                       {
                          label:'List Mahasiswa',
                          icon:'pi pi-fw pi-user',
                       },
                       {
                          label:'Archieve',
                          icon:'pi pi-fw pi-calendar-times',
                          items:[
                             {
                                label:'Remove',
                                icon:'pi pi-fw pi-calendar-minus'
                             }
                          ]
                       }
                    ]
                 },
                {
                   label:'Users',
                   icon:'pi pi-fw pi-user',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-user-plus',
             
                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-user-minus',
             
                      },
                      {
                         label:'Search',
                         icon:'pi pi-fw pi-users',
                         items:[
                            {
                               label:'Filter',
                               icon:'pi pi-fw pi-filter',
                               items:[
                                  {
                                     label:'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label:'List'
                            }
                         ]
                      }
                   ]
                }

             ]
        };
    }
    render() {
        return (
        <div className="p-grid" style={{float: "left"}}>
            <section style={{width:'300px', background: 'red'}}>
                <PanelMenu model={this.state.items} className="p-col-12 p-md-3" style={{width:'280px'}}/>
            </section>
        </div>
        );
    }
}
