import React from 'react'
import './App.scss'
import Header from './Header/Header'
import BiscuitDisplay from './BiscuitDisplay/BiscuitDisplay'

class Biscuit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allBiscuits:[],
        }
        //populates biscuits with data from api to create an array of objects
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
                <BiscuitDisplay allBiscuits={this.state.allBiscuits}/>
            </div>
        )
    }
}

export default Biscuit
