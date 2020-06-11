import React from 'react'
// import './GoToLeaderboardBtn.scss'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

class GoToLeaderboardBtn extends React.Component {
    render () {
        return (
            <div class="buttonsContainer">
                <Link to="/leaderboard"><button className="leaderboardButton">Biscuit Leaderboard</button></Link>
            </div>
        )
    }
}

export default GoToLeaderboardBtn