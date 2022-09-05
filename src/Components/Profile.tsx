import React from "react";
import { User, UserAttribute } from './../Model/Model';
import { AuthService } from './../Services/AuthService';
import { Link } from 'react-router-dom'

interface ProfileState {
    userAttributes: UserAttribute[]
}

interface ProfileProps {
    user: User | undefined
    authService: AuthService
}

export class Profile extends React.Component<ProfileProps, ProfileState> {

    state: ProfileState = {
        userAttributes: []
    }

    render() {
        let profileSpace
        if (this.props.user) {
            profileSpace = <div className='profile-space'>
                <h3 className="profile-header">Hello {this.props.user.userName}</h3>
                Here are your attributes:
                {this.renderUserAttributes()}
            </div>
        } else {
            profileSpace =
                <div className="profile-space-login">
                    Please <Link to='/login'>Login</Link>
                </div>
        }
        return (
            <div className='profile-page'>
                <h3 className='profile-welcome'>Hello I am a profile page!</h3>
                {profileSpace}
            </div>
        )
    }

    async componentDidMount() {
        if (this.props.user) {
            const userAltrs = await this.props.authService.getUserAttributes(this.props.user);
            this.setState({
                userAttributes: userAltrs
            })
        }
    }

    private renderUserAttributes() {
        const rows = []
        for (const userAttribute of this.state.userAttributes) {
            if (userAttribute.name !== 'picture') {
                rows.push(
                    <tr className='userAttributes' key={userAttribute.name}>
                        <td>{userAttribute.name}</td>
                        <td>{userAttribute.value}</td>
                    </tr>)
            }
        }
        return rows
    }
}