import React from 'react'
import Header from '../Header/Header'

class LeaderboardDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        topThree: [],
        fourToTen: []
    }
}

componentDidUpdate(prevProps) {
    if (this.props.allBiscuits !== prevProps.allBiscuits) {
        this.setState({
            biscuitsToDisplay: this.props.allBiscuits
        })
    }
}
  
  render () {
        return (
          <div>          
            <Header />
            <h3>top10</h3>
          </div>

        )
    }
}

export default LeaderboardDisplay

