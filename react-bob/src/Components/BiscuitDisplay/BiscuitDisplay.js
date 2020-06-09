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
        let allTheBiscuits = this.props.allBiscuits[0,1]
        
        // function shuffle(array) {
        //     array.sort(() => Math.random() - 0.5);
        // }

        // let shuffledBiscuits = shuffle(allTheBiscuits);
        // let selectedBiscuits = shuffledBiscuits[0,1]

        this.setState({
            biscuitsToDisplay: allTheBiscuits
        })

    }

    render () {
        return (
            <div className="App">
                {console.log(this.state.biscuitsToDisplay)}
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