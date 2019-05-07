import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

//import {ComponentName} from 'primereact/{componentname}';
import {Dialog} from 'primereact/dialog';
import {Accordion,AccordionTab} from 'primereact/accordion';
import {DataTable} from 'primereact/datatable';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import CrudMahasiswa from './komponen/CrudMahasiswa';
import {AppTopbar} from './AppTopbar';

class App extends Component {
  render(){
    return (
      <div>
        <AppTopbar/>
        <Route path="/mahasiswa" component={CrudMahasiswa}/>
      </div>
    );
  }
}

export default App;
