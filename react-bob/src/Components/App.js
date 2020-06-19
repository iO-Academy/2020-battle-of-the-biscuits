import React from 'react'
import './App.scss'
import Header from './Header/Header'
import BiscuitDisplay from './BiscuitDisplay/BiscuitDisplay'
import GoToLeaderboardBtn from './BiscuitDisplay/GoToLeaderboardBtn/GoToLeaderboardBtn'

class Biscuit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allBiscuits:[],
        }
        //populates biscuits with data from api to create an array of objects
        this.allBiscuits()
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

    render() {
        return (
            <div>
                <Header />
                <BiscuitDisplay allBiscuits={this.state.allBiscuits} generateNewCards={this.allBiscuits}/>
                <GoToLeaderboardBtn />
            </div>
        )
    }
}

export default Biscuit
