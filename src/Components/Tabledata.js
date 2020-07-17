import React, { Component } from 'react';
import TableDataRow from "./TableDataRow";

class Tabledata extends Component {

    deleteButtonClick = (idUser) =>{
        this.props.deleUser(idUser);
    }
    mapppingDataUser = () =>  this.props.DataUser.map((value, key) => (
        <TableDataRow
        deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
        changeEditUserStatus = {() => this.props.changeEditUserStatus()}
        editFunClick = {(user) => { this.props.editFun(value)}} userName = { value.name} key = {key} stt = {key+1} tel = {value.tel} premission = { value.premission} id={value.id}/>
    ))


    render() {
        //console.log(this.props.DataUser);
        
        return (
            <div className="col">
                <table className="table table-striped table-hover table-inverse">
                <thead>
                    <tr>
                        <th>Stt</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mapppingDataUser()}
                </tbody>
                </table>
            </div>
        );
    }
}

export default Tabledata;