import React, { Component } from 'react';
import TableDataRow from "./TableDataRow";

class Tabledata extends Component {

    mapppingDataUser = () =>  this.props.DataUser.map((value, key) => (
        <TableDataRow userName = { value.name} key = {key} stt = {key+1} tel = {value.tel} premission = { value.premission}/>
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