import React from 'react'
import './App.scss'
import Header from './Header/Header'
import BiscuitDisplay from './BiscuitDisplay/BiscuitDisplay'
// import LeaderboardDisplay from './LeaderboardDisplay/LeaderboardDisplay'

class Biscuit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allBiscuits:[],
            // topThreeBiscuits:[],
            // fourToTenBiscuits:[]
        }

        //populates biscuits with data from api to create an array of objects
        this.allBiscuits()
        // this.topThreeBiscuits()
        // this.fourToTenBiscuits()
    }

    allBiscuits = () => {
        fetch('http://localhost:9000/biscuits/')
        .then(data => data.json())
            .then((data) => {
                this.setState ({
                    allBiscuits: data.data
                })
            })
    }

    // topThreeBiscuits = () => {
    //     fetch('http://localhost:9000/biscuits/topthree')
    //     .then(data => data.json())
    //         .then((data) => {
    //             this.setState ({
    //                 topThreeBiscuits: data.data
    //             })
    //         })
    // }

    // fourToTenBiscuits = () => {
    //     fetch('http://localhost:9000/biscuits/fourtoten')
    //     .then(data => data.json())
    //         .then((data) => {
    //             this.setState ({
    //                 fourToTenBiscuits: data.data
    //             })
    //         })
    // }

    render() {
        return (
            <div>
                <Header />
                <BiscuitDisplay allBiscuits={this.state.allBiscuits}/>
                {/* <LeaderboardDisplay topThreeBiscuits={this.state.top3Biscuits} fourToTenBiscuits={this.state.fourToTenBiscuits}/> */}
            </div>
        )
    }
}

export default Biscuit
