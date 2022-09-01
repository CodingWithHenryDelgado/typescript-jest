import React, { SyntheticEvent } from 'react'
import { User } from '../Model/Model';
import { AuthService } from './../Services/AuthService';

interface LoginProps {
    authService: AuthService,
    setUser: (user: User) => void
}

interface LoginState {
    userName: string,
    password: string,
    loginAttempted: boolean,
    loginSuccessful: boolean
}

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component<LoginProps, LoginState> {

    state: LoginState = {
        userName: '',
        password: '',
        loginAttempted: false,
        loginSuccessful: false
    }

    private setUserName(event: CustomEvent) {
        this.setState({ userName: event.target.value })
    }

    private setPassword(event: CustomEvent) {
        this.setState({ password: event.target.value })
    }

    private async handleSubmit(event: SyntheticEvent) {
        event.preventDefault()
        this.setState({ loginAttempted: true })

        const result = await this.props.authService.login(
            this.state.userName,
            this.state.password
        )
        if (result) {
            this.setState({ loginSuccessful: true })
            this.props.setUser(result)
        } else {
            this.setState({ loginSuccessful: false })
        }
    }


    render() {
        let loginMessage: any;
        if (this.state.loginAttempted) {
            if (this.state.loginSuccessful) {
                loginMessage = <label>Login Successful</label>
            } else {
                loginMessage = <label>Sad face</label>
            }
        }

        return (
            <div>
                <h2>Please login</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input value={this.state.userName} onChange={e => this.setUserName(e)} /> <br />
                    <input type="password" value={this.state.password} onChange={e => this.setPassword(e)} /> <br />
                    <input value='login' type='submit' />
                </form>
                {loginMessage}
            </div>
        )
    }
}