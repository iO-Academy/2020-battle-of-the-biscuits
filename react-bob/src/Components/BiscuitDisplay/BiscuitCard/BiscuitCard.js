import React from 'react';
import './BiscuitCard.scss';
import '.././../App';

class BiscuitCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            // <div>
            //     <p>{ this.state.biscuit[0].name }</p>
            // </div>
            <div className="biscuitCard">
                <div className="image" style={{backgroundImage: "url(" + this.props.biscuitToDisplay.img + ")"}}></div>
                <div className="biscuitImage"></div>
                <h3>{this.props.biscuitToDisplay.name}</h3>
                <h3>Recommended Dunking Time: {this.props.biscuitToDisplay.RDT}</h3>
            </div>
        )
    }
}

export default BiscuitCard;
