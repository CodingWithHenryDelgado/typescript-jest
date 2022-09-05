import { Component } from "react";
// import './SpaceComponent.css';

interface SpaceComponentProps {
    spaceId: string,
    name: string,
    location: string,
    photoUrl?: string,
    reserveSpace: (spaceId: string) => void
}

export class SpaceComponent extends Component<SpaceComponentProps> {
    private renderImage() {

        const image = require("../../assets/generic-image.jpg");

        if (this.props.photoUrl) {
            return <img src={image} alt={this.props.name} />
        } else {
            return <img src={image} alt='' />
        }
    }

    render() {
        return <div className="spaceComponent">
            {this.renderImage()}
            <label className="name">{this.props.name}</label>
            <label className="spaceId">{this.props.spaceId}</label>
            <label className="location">{this.props.location}</label>
            <button onClick={() => this.props.reserveSpace(this.props.spaceId)}>Reserve</button>
        </div>
    }
}