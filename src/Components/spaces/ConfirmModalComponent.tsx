import { Component } from "react";

interface ConfirmModalComponentProps {
    show: boolean,
    content: string,
    close: () => void
}

export class ConfirmModalComponent extends Component<ConfirmModalComponentProps> {
    render() {
        if (!this.props.show) {
            return null
        } else {
            return <div className="modal">
                <div className="modalContent">
                    <h2>Checking with the hotel....</h2>
                    <h3 className="modalText">{this.props.content}</h3>
                    <button className="close" onClick={() => this.props.close()}>Close me!</button>
                </div>
            </div>
        }
    }
}