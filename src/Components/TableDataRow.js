import React, { Component } from 'react';

class TableDataRow extends Component {

    premissionShow = () => {
        if(this.props.premission ===1){
            return "Admin";
        }
        if (this.props.premission === 2){
            return "Moderator";
        }
        else {return "Nomal";}
    }
    editClick = () =>{
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    deleteButtonClick = (idUser) =>{
        this.props.deleteButtonClick(idUser)
    }

    render() {
        
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{ this.premissionShow() }</td>
                <td>
                    <div className="btn-group">
                    <button className="btn btn-warning" onClick = {() => this.editClick()}><i className="fa fa-edit" /> Sửa</button>
                    <button className="btn btn-danger" onClick = {(idUser) => this.deleteButtonClick(this.props.id)}>Xóa</button>
                    </div> 
                </td>
            </tr>
        );
    }
}

export default TableDataRow;