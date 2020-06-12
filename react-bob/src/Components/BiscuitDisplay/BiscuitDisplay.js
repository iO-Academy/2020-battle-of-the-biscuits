import React from 'react'
import './BiscuitDisplay.scss'
import BiscuitCard from './BiscuitCard/BiscuitCard'

class BiscuitDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            biscuitsToDisplay: []
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.allBiscuits !== prevProps.allBiscuits) {
            this.setState({
                biscuitsToDisplay: this.props.allBiscuits
            })
        }
    }

    markSelected = (index, otherIndex) => {
        this.sendWinner(index)
        this.sendLoser(otherIndex)
        this.props.generateNewCards()
    }

    sendWinner = (index) => {
        console.log(this.state.biscuitsToDisplay)
        fetch("http://localhost:9000/biscuits/winner", {
            "method": "PUT",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify({
                name: this.state.biscuitsToDisplay[index].name,
                comparisoncount: this.state.biscuitsToDisplay[index].comparisoncount,
                wincount: this.state.biscuitsToDisplay[index].wincount
            })
        })
        .then(response => response.json())
        .then(response => {console.log(response)
        })
    }


    sendLoser = (otherIndex) => {
        fetch("http://localhost:9000/biscuits/loser", {
            "method": "PUT",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify({
                name: this.state.biscuitsToDisplay[otherIndex].name,
                comparisoncount: this.state.biscuitsToDisplay[otherIndex].comparisoncount,
                wincount: this.state.biscuitsToDisplay[otherIndex].wincount
            })
        })
        .then(response => response.json())
        .then(response => {console.log(response)
        })
    }
    
    render () {
        return (
            <div className="App">
                <h3>Click on your favourite</h3>
                <div className='comparison'>
                    <BiscuitCard BiscuitSelected={ this.state.biscuitsToDisplay[0] } onClick={ () => this.markSelected(0,1) } generateNewCards={ this.props.generateNewCards }/>
                    <h2>VS</h2>
                    <BiscuitCard BiscuitSelected={ this.state.biscuitsToDisplay[1] } onClick={ () => this.markSelected(1,0) } generateNewCards={ this.props.generateNewCards }/>
                </div>
            </div>
        )
    }
}

export default BiscuitDisplay