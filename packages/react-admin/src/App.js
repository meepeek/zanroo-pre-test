import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider'
import Login from './Login';
import UserForm from './UserForm'

const testList = [
  {a: 1},
  {b: 2}
]

const dataProvider = jsonServerProvider('http://localhost:3333/api/');
const App = () => <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    loginPage={Login}
  >
    <Resource name="UserForms" title="UserForms" list={UserForm.list} create={UserForm.create} edit={UserForm.edit} />
  </Admin>

export default App;
