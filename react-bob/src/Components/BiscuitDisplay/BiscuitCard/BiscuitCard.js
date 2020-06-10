import React from 'react';
import './BiscuitCard.scss';
import '.././../App';

class BiscuitCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="biscuitCard">
                {/* {console.log(this.props.biscuitToDisplay)} */}
                {/* <div className="image" style={{backgroundImage: "url(" + this.props.biscuitToDisplay.img + ")"}}></div>
                <div className="biscuitImage"></div>
                <h3>{this.props.biscuitToDisplay.name}</h3>
                <h3>Recommended Dunking Time: {this.props.biscuitToDisplay.RDT}</h3> */}
            </div>
        )
    }
}

export default BiscuitCard;
