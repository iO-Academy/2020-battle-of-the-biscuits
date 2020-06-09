import React from 'react';
import './BiscuitDisplay.scss';
import BiscuitCard from './BiscuitCard/BiscuitCard'
import Header from '../Header/Header'
import Biscuit from '../../Components/App'

class BiscuitDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            biscuitsToDisplay:[]
            }
    }

    randomBiscuits = () => {
        let allTheBiscuits= this.state.allBiscuits
        let shuffledBiscuits = shuffle(allTheBiscuits);
        let selectedBiscuits = shuffledBiscuits[0,1]
        this.setState({
            biscuitsToDisplay: selectedBiscuits
        })

    }

    render () {
        return (
            <div className="App">
                <Header />
                <h3>Click on your favourite</h3>
                <div className='comparison'>
                    <BiscuitCard Biscuit={this.state.biscuitsToDisplay[0]}/>
                    <h2>VS</h2>
                    <BiscuitCard Biscuit={this.state.biscuitsToDisplay[1]}/>
                </div>
            </div>
        )
    }
}

export default BiscuitDisplay