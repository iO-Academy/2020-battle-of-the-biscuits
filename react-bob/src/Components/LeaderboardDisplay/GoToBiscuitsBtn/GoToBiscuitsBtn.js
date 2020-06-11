import React from 'react'
// import './GoToBiscuitBtn.scss'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

class GoToBiscuitBtn extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    <div class="buttonsContainer">
                        <Link to="/"><button class="biscuitButton">Biscuit Comparison</button></Link>
                    </div>
                </div>
            </Router>
        )
    }
}

export default GoToBiscuitBtn