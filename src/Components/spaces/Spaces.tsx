// Spaces which renders SpaceComponents depending on the size of our dataService
// SpaceComponents show hotel with ID, Reserve button, Picture (sometimes), Location, and Name
// The Reserve in the SpaceComponent is attached to the Confirm Modal Component
import { Component } from "react";
import { DataService } from './../../Services/DataService';
import { Space, User } from "../../Model/Model";
import { SpaceComponent } from './SpaceComponent';
import { ConfirmModalComponent } from './ConfirmModalComponent';

interface SpacesState {
    spaces: Space[],
    showModal: boolean,
    modalContent: string
}

interface SpacesProps {
    user: User | undefined,
    dataService: DataService
}

export class Spaces extends Component<SpacesProps, SpacesState> {
    // Spaces are imported from the dataservice script into the state
    // Modal is whenever the user clicks on Reserve and explains if the hotel is full or not
    constructor(props: SpacesProps) {
        super(props)
        this.state = {
            spaces: [],
            showModal: false,
            modalContent: ''
        }
        this.reserveSpace = this.reserveSpace.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    async componentDidMount() {
        const spaces = await this.props.dataService.getSpaces();
        this.setState({
            spaces: spaces
        })
    }

    // Checks the ID from the space.
    // If the user is not logged in then the app tells them to login
    // If the user is logged in and tries to reserve the hotel in paris, it will give them the okay
    // If the user is logged in and tries to reserve any other hotel, the hotel will be fully booked
    private async reserveSpace(spaceId: string) {
        const reservationResult = await this.props.dataService.reserveSpace(spaceId)
        if (reservationResult && this.props.user) {
            this.setState({
                showModal: true,
                modalContent: `You reserved a room in Hotel: ${spaceId}! Reservation Number: ${reservationResult}`
            })
        } else if ((reservationResult && !this.props.user) || (reservationResult === undefined && !this.props.user)) {
            this.setState({
                showModal: true,
                modalContent: `Please login to reserve a spot..`
            })
        } else {
            this.setState({
                showModal: true,
                modalContent: `Sorry but this hotel is fully booked!`
            })
        }
    }

    // Renders all the space components with all the spaces we have
    private renderSpaces() {
        const rows: any[] = []
        for (const space of this.state.spaces) {
            rows.push(
                <SpaceComponent
                    spaceId={space.spaceId}
                    photoUrl={space.photoUrl}
                    location={space.location}
                    name={space.name}
                    key={space.spaceId}
                    reserveSpace={this.reserveSpace}
                />
            )
        }
        return rows;
    }

    private closeModal() {
        this.setState({
            showModal: false,
            modalContent: ''
        })
    }

    render() {
        return (<div className="space-page">
            <>
                <h2 className="space-header">Find your temporary new home!</h2>
                {this.renderSpaces()}
                <ConfirmModalComponent
                    close={this.closeModal}
                    content={this.state.modalContent}
                    show={this.state.showModal}
                />
            </>
        </div>)
    }
}