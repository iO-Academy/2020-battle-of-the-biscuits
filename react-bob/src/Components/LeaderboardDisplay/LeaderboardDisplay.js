import React from 'react'

class LeaderboardDisplay extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          topThree: [],
          fourToTen: []
      }
  }

  componentDidUpdate(prevProps) {
    if ((this.props.topThreeBiscuits !== prevProps.topThreeBiscuits) && (this.props.fourToTenBiscuits !== prevProps.fourToTenBiscuits)) {
        this.setState({
            topThree: this.props.topThreeBiscuits,
            fourToTen: this.props.fourToTenBiscuits
        })
    }
  }

  
  render () {
        return (
          <div>       
            <h3>Top Ten Leaderboard</h3>
            <div className= "leaderboard">
              <div className="top3">
                {this.state.topThree[0]}
              </div>
              <div className="top3">
                {this.state.topThree[1]}

              </div>
              <div className="top3">
                {this.state.topThree[2]}
              </div>
              {
                this.state.fourToTen.map((biscuitFourToTen) => 
                    <div class="biscuitFourToTenCard">
                        <h2 class="biscuitFourToTenHeading" >{biscuitFourToTen.biscuitFourToTen_name}</h2>
                        <p class="biscuitFourToTenText">{biscuitFourToTen.winratio}%</p>
                    </div>   
                )}
            </div>
          </div>
        )
  }
}

export default LeaderboardDisplay

