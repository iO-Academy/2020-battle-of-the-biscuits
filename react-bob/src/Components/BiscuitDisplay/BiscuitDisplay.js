import React from 'react';
import './BiscuitDisplay.scss';
import BiscuitCard from './BiscuitCard/BiscuitCard'

class BiscuitDisplay extends React.Component {
    // construct(props)
    // super(props)
    render () {
        return (
            
            <div className='comparison'>
                <BiscuitCard />
                <h2>vs</h2>
                <BiscuitCard />
            </div>
        )
    }
}

export default BiscuitDisplay