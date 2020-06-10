import React from 'react';
import './BiscuitDisplay.scss';
import BiscuitCard from './BiscuitCard/BiscuitCard'
import Header from '../Header/Header'
import Biscuit from '../App'

class BiscuitDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            biscuitsToDisplay: []
        }
    }

    componentDidUpdate(prevProps) {
        // console.log(this.props.allBiscuits)
        if (this.props.allBiscuits !== prevProps.allBiscuits) {
            this.setState({
                biscuitsToDisplay: this.props.allBiscuits
            })
        }
    }

    // randomBiscuits = () => {
        
    //     let allTheBiscuits = this.props.allBiscuits
        
        
    //     function shuffle(array) {
    //         array.sort(() => Math.random() - 0.5);
    //     }

    //     let shuffledBiscuits = shuffle(allTheBiscuits);
    //     let selectedBiscuits = shuffledBiscuits[0,1]

    //     this.setState({
    //         biscuitsToDisplay: allTheBiscuits
    //     })

    // }

    render () {
        return (
            <div className="App">
                {/* <h1>{this.state.biscuitsToDisplay}</h1> */}
                {/* {console.log(this.props.allBiscuits)} */}
                {/* {console.log(this.state.biscuitsToDisplay[0])} */}
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