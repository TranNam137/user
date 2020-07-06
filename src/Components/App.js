import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import Tabledata from './Tabledata';
import AddUser from './AddUser';
import DataUser from './Data.json';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      hienThiForm : true,
      data : DataUser,
      searchText: ''
    }
  }

  getTextSearch = (dl) =>{
    this.setState({
      searchText: dl
    })
    console.log('Du liệu Bố nhận được' + this.state.searchText);
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
    console.log(ketqua);
    

    return (

      <div>
        <Header />
        <div className="container">
          <div className='row'>
            <Search 
            checkConnectProps = {(dl) => this.getTextSearch(dl)}
            ketnoi = {() => this.doiTrangThai()} hienThiForm = { this.state.hienThiForm}/>
            <Tabledata DataUser = { ketqua} />
            <AddUser hienThiForm = { this.state.hienThiForm}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

