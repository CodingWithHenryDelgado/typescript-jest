import React from "react";
import { User } from '../Model/Model';
import { AuthService } from "../Services/AuthService";

interface LogoutProps {
    user: User | undefined;
    authService: AuthService;
    clearUser: () => void;
}

interface LogoutState {
    logoutSuccess: string
}

export class Logout extends React.Component<LogoutProps, LogoutState> {

    state: LogoutState = {
        logoutSuccess: ''
    }

    async componentDidMount() {
        if (this.props.user) {
            this.setState({
                logoutSuccess: 'See you next time?'
            })
            this.props.clearUser();
        }
    }


    render() {
        return (
            <div>
                {this.state.logoutSuccess}
            </div>
        )
    }
}