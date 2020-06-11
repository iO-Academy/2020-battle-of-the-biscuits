import React from 'react'
import './App.scss'
import Header from './Header/Header'
import LeaderboardDisplay from './LeaderboardDisplay/LeaderboardDisplay'

class Leaderboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topThreeBiscuits:[],
            fourToTenBiscuits:[]
        }
        //populates biscuits with data from api to create an array of objects
        this.topThreeBiscuits()
        this.fourToTenBiscuits()
    }


    topThreeBiscuits = () => {
        fetch('http://localhost:9000/biscuits/topthree')
        .then(data => data.json())
            .then((data) => {
                this.setState ({
                    topThreeBiscuits: data.data
                })
            })
    }

    fourToTenBiscuits = () => {
        fetch('http://localhost:9000/biscuits/fourtoten')
        .then(data => data.json())
            .then((data) => {
                this.setState ({
                    fourToTenBiscuits: data.data
                })
            })
    }

    render() {
        return (
            <div>
                <Header />
                <LeaderboardDisplay topThreeBiscuits={this.state.topThreeBiscuits} fourToTenBiscuits={this.state.fourToTenBiscuits}/>
            </div>
        )
    }
}

export default Leaderboard
