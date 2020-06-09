import React from 'react';
import './BiscuitDisplay.scss';
import BiscuitCard from './BiscuitCard/BiscuitCard'
import Header from '../Header/Header'

class BiscuitDisplay extends React.Component {
    // construct(props)
    // super(props)
    render () {
        return (
            <div className="App">
                <Header />
                <h3>Click on your favourite</h3>
                <div className='comparison'>
                    <BiscuitCard />
                    <h2>VS</h2>
                    <BiscuitCard />
                </div>
            </div>
        )
    }
}

export default BiscuitDisplay