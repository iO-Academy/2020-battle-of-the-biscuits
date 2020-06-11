import React from 'react'
import GoToBiscuitBtn from './GoToBiscuitsBtn/GoToBiscuitsBtn'

class LeaderboardDisplay extends React.Component {
  render () {
    let i = 0
    let j = 3
        return (
          <div>       
            <h3>Top Ten Leaderboard</h3>
            <div className= "leaderboard">
              <div className="top3">
                {console.log(this.props.topThreeBiscuits)}
                {this.props.topThreeBiscuits.map((topThree, index) => {
                  i++
                  return <div className={`biscuit${index}`}>{i}{topThree.name}{topThree.winratio}</div>   
                }
                )}
              </div>
              <div className="fourToTen">

                {this.props.fourToTenBiscuits.map((fourToTen, index) => {
                  j++
                  return <div className={`biscuit${index}`}>{j}{fourToTen.name}</div>   
                }
                )}
                <GoToBiscuitBtn />
              </div>
            </div>
          </div>
        )
  }
}

export default LeaderboardDisplay

