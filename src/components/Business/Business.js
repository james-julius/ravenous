import React from 'react';
import './Business.css';

const googleMapsWorthy = (rawAddress) => {
    return "https://www.google.co.uk/maps/search/" + rawAddress.join(' ').split(' ').join('+');
}

class Business extends React.Component {
    constructor(props) {
        super(props);
        this.handleAlert = this.handleAlert.bind(this);
    }

    handleAlert() {
        alert(`You can make a reservation by calling: ${this.props.business.phoneNumber}`);
    }

    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt={"The outside of " + this.props.business.name} />
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p><a target="_blank" href={googleMapsWorthy(this.props.business.full_address)} rel="noopener noreferrer">
                            {this.props.business.address}</a></p>
                    <p>{this.props.business.city}</p>
                    <p>{this.props.business.state}, {this.props.business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.business.category}</h3>
                        <h3 className="rating">{this.props.business.rating} stars</h3>
                        <p>{this.props.business.reviewCount} reviews</p>
                    </div>
                </div>
                <div className="button-container">
                    <a href="/#" onClick={this.handleAlert}>Make a reservation</a>
                </div>
            </div>
        );
    }
}

export default Business;