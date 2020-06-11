import React from 'react'
import GoToBiscuitBtn from './GoToBiscuitsBtn/GoToBiscuitsBtn'
import './LeaderboardDisplay.scss'


class LeaderboardDisplay extends React.Component {
  render() {
    let i = 0
    let j = 3
    return (
      <div>
        <h3>Top Ten Leaderboard</h3>
        <div className="leaderboard">
          <div className="leaderboard_headings">
            <p className="position">Position</p>
            <p className="biscuit_name">Biscuit</p>
            <p className="win">Win ratio %</p>
          </div>
          <div className="top3">
            {console.log(this.props.topThreeBiscuits)}
            {this.props.topThreeBiscuits.map((topThree, index) => {
              i++
              return <div className="row" key={i}>
                <div className={`biscuit${index}`}>{i}</div>
                <div className={`biscuit${index}`}>{topThree.name}</div>
                <div className={`biscuit${index}`}>{topThree.winratio}</div>
              </div>
            }
            )}
          </div>
          <div className="fourToTen">
            {this.props.fourToTenBiscuits.map((fourToTen, index) => {
              j++
              return <div className="row" key={j}>
                <div className={`biscuit${index}`}>{j}</div>
                <div className={`biscuit${index}`}>{fourToTen.name}</div>
                <div className={`biscuit${index}`}>{fourToTen.winratio}</div>
              </div>
            }
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default LeaderboardDisplay

