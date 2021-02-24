import React, { Component } from 'react'

import '../assets/css/login.css'

import { LoginService } from '../services/LoginService'

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' }

        this.resetForm = this.resetForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        if (!this.state.username || !this.state.password) return
        const resp = LoginService.loginUser(this.state.username, this.state.password)

        if (resp === "reset") {
            console.error("Error trying to login")
            this.resetForm()
        } else {
            console.log(resp)
            // Processs JWT
            // Login goto Todo page
        }
    }

    handleChange(property, val) {
        val = val.trim()
        this.setState({[property]: val})
    }

    resetForm() {
        this.setState({ username: '', password: '' })
    }

    render() {
        return (
            <div>
                <p>Login Component</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Username:</td>
                            <td>
                                <input 
                                    type="text" 
                                    id="username" 
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={(e) => this.handleChange("username", e.target.value)}
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td>
                                <input 
                                    type="password" 
                                    id="password" 
                                    value={this.state.password}
                                    onChange={(e) => this.handleChange("password", e.target.value)}
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={this.resetForm} id="reset">Reset</button>
                                <input onClick={this.handleSubmit} id="submit" type="button" value="Login"></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}