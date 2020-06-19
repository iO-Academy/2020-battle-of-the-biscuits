import React from 'react'
import './BiscuitCard.scss'
import '.././../App'

class BiscuitCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            biscuitToBeDisplayed: {}
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.BiscuitSelected !== prevProps.BiscuitSelected) {
            this.setState({
                biscuitToBeDisplayed: this.props.BiscuitSelected
            }, () => {
                if (this.state.biscuitToBeDisplayed.name === prevState.biscuitToBeDisplayed.name) {
                    this.props.generateNewCards()
                }
            })
        }
    }

    render () {
        return (
            <div className="biscuitCard" onClick= {this.props.onClick}>
                <div className="image" style={{backgroundImage: "url(" + this.state.biscuitToBeDisplayed.img + ")"}} alt="biscuit"></div>
                <h3>{this.state.biscuitToBeDisplayed.name}</h3>
                <h3>Recommended Dunking Time: {this.state.biscuitToBeDisplayed.RDT} seconds</h3>
            </div>
        )
    }
}

export default BiscuitCard
