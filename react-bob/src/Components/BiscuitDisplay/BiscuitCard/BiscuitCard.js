import React from 'react'
import './BiscuitCard.scss'
import '.././../App'

class BiscuitCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            biscuitToBeDisplayed: {},
            status: "loser"
        }
        this.markSelected = this.markSelected.bind(this);
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

    markSelected = () => {
        this.props.generateNewCards()
         this.setState({
             status: "winner"
        }, () => {
            this.sendInfo()
        })
    }

    sendInfo = () => {
        console.log(this.state.status)
        if (this.state.status === "winner") {
            this.sendWinner()
        }
        // } else {
            // this.sendLoser()
        // }
    }

    sendWinner = () => {
        fetch("http://localhost:9000/biscuits/winner", {
            "method": "PUT",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify({
                name: this.state.biscuitToBeDisplayed.name,
                comparisoncount: this.state.biscuitToBeDisplayed.comparisoncount,
                wincount: this.state.biscuitToBeDisplayed.wincount
            })
        })
        .then(response => response.json())
        .then(response => {console.log(response)
        })
    }

    render () {
        return (
            <div className="biscuitCard" onClick={this.markSelected}>
                <div className="image" style={{backgroundImage: "url(" + this.state.biscuitToBeDisplayed.img + ")"}} alt="biscuit"></div>
                <h3>{this.state.biscuitToBeDisplayed.name}</h3>
                <h3>Recommended Dunking Time: {this.state.biscuitToBeDisplayed.RDT} seconds</h3>
            </div>
        )
    }
}

export default BiscuitCard
