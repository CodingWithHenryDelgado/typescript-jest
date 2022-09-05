import { Component } from "react";

interface SpaceComponentProps {
    spaceId: string,
    name: string,
    location: string,
    photoUrl?: string,
    reserveSpace: (spaceId: string) => void
}

export class SpaceComponent extends Component<SpaceComponentProps> {
    private renderImage() {
        if (this.props.photoUrl) {
            return <img src={this.props.photoUrl} alt={this.props.name} />
        } else {
            return <img src={this.props.photoUrl} alt='Nothing found' />
        }
    }

    render() {
        return <div className="spaceComponent">
            {this.renderImage()}
            <label className="name">{this.props.name}</label>
            <label className="location">{this.props.location}</label>
            <label className="spaceId">ID:{this.props.spaceId}</label>
            <button onClick={() => this.props.reserveSpace(this.props.spaceId)} className="reserve">Reserve</button>
        </div>
    }
}