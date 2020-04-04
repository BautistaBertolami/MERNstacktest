import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            confirmPassword: ''
        }
    }

    onChangeUsername(temp) {
        this.setState({
            username: temp.target.value
        });
    }
    onChangePassword(temp) {
        this.setState({
            password: temp.target.value
        });
    }

    onChangeConfirmPassword(temp){
        this.setState({
            confirmPassword: temp.target.value
        });
    }

    onSubmit(temp) {
        temp.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Username: ${this.state.username}`);
        console.log(`Password: ${this.state.password}`);

        if( this.password === this.confirmPassword ){
          const newUser = {
              username: this.state.username,
              password: this.state.password
          };

          //axios.post('http://localhost:4000/users', newUser)
          //    .then(res => console.log(res.data));

          this.setState({
              username: '',
              password: '',
              confirmPassword: ''
          })
        }  else{
          alert("Passwords do not match")
        }


    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Account</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.password}
                                onChange={this.onChangePassword}
                                />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.confirmPassword}
                                onChange={this.onChangeConfirmPassword}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}
