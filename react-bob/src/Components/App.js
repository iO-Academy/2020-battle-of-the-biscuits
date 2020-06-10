import React from 'react'
import './App.scss'
import BiscuitDisplay from './BiscuitDisplay/BiscuitDisplay'
import LeaderboardDisplay from './LeaderboardDisplay/LeaderboardDisplay'

class Biscuit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allBiscuits:[],
            // top3Biscuits:[],
            // fourToTenBiscuits:[]
        }

        //populates biscuits with data from api to create an array of objects
        this.allBiscuits()
        // this.top3Biscuits()
        // this.fourToTenBiscuits()
    }

    allBiscuits = () => {
        fetch('http://localhost:9000/biscuits/')
        .then(data => data.json())
            .then((data) => {
                this.setState ({
                    allBiscuits: data
                })
            })
    }

    // top3Biscuits = () => {
    //     fetch('http://localhost:9000/biscuits/topthree')
    //     .then(data => data.json())
    //         .then((data) => {
    //             this.setState ({
    //                 top3Biscuits: data
    //             })
    //         })
    // }

    // fourToTenBiscuits = () => {
    //     fetch('http://localhost:9000/biscuits/fourtoten)
    //     .then(data => data.json())
    //         .then((data) => {
    //             this.setState ({
    //                 fourToTenBiscuits: data
    //             })
    //         })
    // }

    render() {
        return (
            <div>
                <BiscuitDisplay allBiscuits={this.state.allBiscuits}/>
                {/* <LeaderboardDisplay top3={this.state.top3Biscuits} fourToTenBiscuits={this.state.fourToTenBiscuits}/> */}
            </div>
        )
    }
}

export default Biscuit
