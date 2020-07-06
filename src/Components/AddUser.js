import React, { Component } from 'react';

class AddUser extends Component {

    kiemtra = () =>{
        if(this.props.hienThiForm === false){
            return(
                <div className="col">
                    <div className="card border-primary mb-3 mt-2">
                        <div className="card-header">Thêm mới</div>
                        <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Nhập tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Nhập số điện thoại" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" required>
                                <option value>Admin</option>
                                <option value>Two</option>
                                <option value>Three</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="btn btn-block btn-primary">Thêm mới</div>
                        </div>
                        </div>
                    </div>
                </div>    
            )
        }
    }



    render() {
        console.log(this.props.hienThiForm);
        
        return (
            <div>
                {this.kiemtra()}
            </div>
        );
    }
}

export default AddUser;