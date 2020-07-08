import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name : '',
            tel : '',
            premission: ''
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }


    kiemtra = () =>{
        if(this.props.hienThiForm === false){
            return(
                <div className="col">
                    <form>
                        <div className="card border-primary mb-3 mt-2">
                            <div className="card-header">Thêm mới</div>
                            <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" onChange = {(event) => this.isChange(event)} className="form-control" name="name" placeholder="Nhập tên user" />
                            </div>
                            <div className="form-group">
                                <input type="text"  onChange = {(event) => this.isChange(event)}  className="form-control" name = "tel" placeholder="Nhập số điện thoại" />
                            </div>
                            <div className="form-group">
                                <select className="custom-select"  onChange = {(event) => this.isChange(event)}  name = "premission" required>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Nomal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" onClick = {(name, tel, premission) => this.props.add(this.state.name, this.state.tel, this.state.premission)} value="Thêm mới" />
                            </div>
                            </div>
                        </div>
                    </form>
                </div>    
            )
        }
    }



    render() {
        //console.log(this.props.hienThiForm);

        
        return (
            <div>
                {this.kiemtra()}
            </div>
        );
    }
}

export default AddUser;