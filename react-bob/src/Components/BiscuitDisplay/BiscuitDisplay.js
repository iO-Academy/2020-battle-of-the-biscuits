import React from 'react'
import './BiscuitDisplay.scss'
import BiscuitCard from './BiscuitCard/BiscuitCard'
import Header from '../Header/Header'
import Biscuit from '../App'

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

    render () {
        return (
            <div className="App">
                <Header />
                
                <h3>Click on your favourite</h3>
                <div className='comparison'>
                    <BiscuitCard BiscuitSelected={this.state.biscuitsToDisplay[0]}/>
                    <h2>VS</h2>
                    <BiscuitCard BiscuitSelected={this.state.biscuitsToDisplay[1]}/>
                </div>
            </div>
        )
    }
}

export default BiscuitDisplay