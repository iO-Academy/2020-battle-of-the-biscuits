import React from 'react'
import './GoToBiscuitsBtn.scss'
import {Link} from 'react-router-dom'


class GoToBiscuitBtn extends React.Component {
    render () {
        return (
            <div class="buttonsContainer">
                <Link to="/"><button className="biscuitButton">Biscuit Comparison</button></Link>
            </div>
        )
    }
}

export default GoToBiscuitBtn