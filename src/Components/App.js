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
      searchText: ''
    }
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

    console.log("ket noi ok");
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
    //console.log(ketqua);
    

    return (

      <div>
        <Header />
        <div className="container">
          <div className='row'>
            <Search 
            checkConnectProps = {(dl) => this.getTextSearch(dl)}
            ketnoi = {() => this.doiTrangThai()} hienThiForm = { this.state.hienThiForm}/>
            <Tabledata DataUser = { ketqua} />
            <AddUser add = {(name, tel, premission) => this.getNewUserData(name, tel, premission)} hienThiForm = { this.state.hienThiForm}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

