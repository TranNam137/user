import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue : ''
        }
    }
    isChange = (event) =>{
        console.log(event.target.value);
        this.setState({
            tempValue : event.target.value
        })
        this.props.checkConnectProps(this.state.tempValue)
    }

    hienThiNut = () => {
        if(this.props.hienThiForm === true){
            return <div className="btn btn-block btn-outline-info" onClick = {() => this.props.ketnoi()} >Thêm User</div> 
        }
        else{
            return <div className="btn btn-block btn-outline-secondary" onClick = {() => this.props.ketnoi()} >Đóng</div>
        }
    }


    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                <div className="btn btn-group" style={{maxWidth: '510px', width: '60%'}}>
                    <input type="text" className="form-control" placeholder="Nhập từ khóa" onChange = {(event) => this.isChange(event)} />
                    <div className="btn btn-info" onClick = {(dl) => this.props.checkConnectProps(this.state.tempValue)} >Tìm</div>
                </div> 
                <div className="btn-group1">
                </div>   
                    { this.hienThiNut()}
                </div>
                <hr />
            </div>
        );
    }
}

export default Search;