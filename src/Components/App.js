import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import Tabledata from './Tabledata';
import AddUser from './AddUser';
import DataUser from './Data.json';

const { v4: uuidv4 } = require('uuid');

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      hienThiForm : true,
      data : DataUser,
      searchText: '',
      editUserStatus: false,
      userEditObject : {}
    }
  }

  changeEditUserStatus = () =>{
    this.setState({
      editUserStatus : !this.state.editUserStatus
    })
  }

  deleUser = (idUser) =>{

    var tempData = this.state.data.filter(item => item.id !== idUser)
    this.setState({
      data:tempData
    })
    
  }

  getUserEditInfoApp = (info) =>{
    this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.premission = info.premission;
      }
    })
  }

  editUser = (user) => {
    this.setState({
      userEditobject : user
    })
  }

  getNewUserData = (name, tel, premission) => {

    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.premission = premission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });

    console.log(this.state.data);
    
  }

  getTextSearch = (dl) =>{
    this.setState({
      searchText: dl
    })
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm : !this.state.hienThiForm
    });
  }
  
  render() {  
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    

    return (

      <div>
        <Header />
        <div className="container">
          <div className='row'>
            <Search 
            getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
            userEditobject = {this.state.userEditobject}
            checkConnectProps = {(dl) => this.getTextSearch(dl)}
            ketnoi = {() => this.doiTrangThai()} hienThiForm = { this.state.hienThiForm}
            editUserStatus = { this.state.editUserStatus}
            changeEditUserStatus = {() => this.changeEditUserStatus()}
            />
            <Tabledata
            deleUser = {(idUser) => {this.deleUser(idUser)}}
            changeEditUserStatus = {() => this.changeEditUserStatus()}
            editFun = {(user) => this.editUser(user)} DataUser = { ketqua} />
            <AddUser add = {(name, tel, premission) => this.getNewUserData(name, tel, premission)} hienThiForm = { this.state.hienThiForm}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

