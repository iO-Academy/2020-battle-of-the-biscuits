import React from 'react'
import './GoToLeaderboard.scss'
import {Link} from 'react-router-dom'

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