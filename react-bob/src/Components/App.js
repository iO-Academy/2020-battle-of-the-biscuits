import React from 'react'
import './App.scss'
import Header from './Header/Header'
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
        
        // this.top3Biscuits()
        // this.fourToTenBiscuits()
    }

    componentDidMount() {
        this.allBiscuits()
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

    // generateNewCards = (prevState) => {
    //     fetch('http://localhost:9000/biscuits/')
    //     .then(data => data.json())
    //         .then((data) => {
    //             if (this.state.allBiscuits !== prevState.allBiscuits) {
    //                 if ((this.state.allBiscuits[0] !== prevState.allBiscuits[0]||prevState.allBiscuits[1])|| (this.state.allBiscuits[1] !== prevState.allBiscuits[0]||prevState.allBiscuits[1])) {
    //                     this.setState ({
    //                         allBiscuits: data.data
    //                     })
    //                 }
    //             }
    //         })
    // }

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
                <Header />
                <BiscuitDisplay allBiscuits={this.state.allBiscuits} generateNewCards={this.allBiscuits}/>
                {/* <LeaderboardDisplay top3={this.state.top3Biscuits} fourToTenBiscuits={this.state.fourToTenBiscuits}/> */}
            </div>
        )
    }
}

export default Biscuit
