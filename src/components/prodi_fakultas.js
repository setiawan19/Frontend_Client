import React, { Component } from 'react';
import {CarService} from '../service/CarService';
import {Panel} from 'primereact/panel';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';


export class Prodi_fakultas extends Component{
    
    render(){
        return(
            <div className="p-grid p-fluid dashboard">
                <div className="p-col-12 p-md-6 p-lg-4 p-fluid contact-form">
                    <Panel header="Contact Us">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <Dropdown value={this.state.city} options={cities} placeholder="Select a City" onChange={this.onCityChange} autoWidth={false} />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Name" />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Age" />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Message" />
                            </div>
                            <div className="p-col-12">
                                <Button type="button" label="Send" icon="fa-send"/>
                            </div>
                        </div>
                    </Panel>
                </div>
            </div>
        )
    }
}