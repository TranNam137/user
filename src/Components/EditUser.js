import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state ={
            id: this.props.userEditobject.id,
            name: this.props.userEditobject.name,
            tel: this.props.userEditobject.tel,
            premission: this.props.userEditobject.premission
        }
    }
    

    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
        
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.premission = this.state.premission;

        this.props.getUserEditInfo(info)
        this.props.changeEditUserStatus();
    }
    render() {
        return (
            <div className="row">
                    <div className="col">
                        <form>
                            <div className="card border-primary bg-secondary mb-3 mt-2">
                                <div className="card-header text-center text-white">Sửa thông tin User</div>
                                <div className="card-body text-primary">
                                <div className="form-group">
                                    <input onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditobject.name} type="text" className="form-control" name="name" placeholder="Nhập tên user" />
                                </div>
                                <div className="form-group">
                                    <input onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditobject.tel} type="text" className="form-control" name = "tel" placeholder="Nhập số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditobject.premission} className="custom-select" name = "premission" required>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Nomal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-danger" value="Lưu" onClick = {() => this.saveButton()} />
                                </div>
                                </div>
                            </div>
                        </form>
                    </div> 
                </div>
        );
    }
}

export default EditUser;