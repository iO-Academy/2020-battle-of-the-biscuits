import React from 'react';
import './App.scss';

class Biscuit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allBiscuits:[],
            top3Biscuits:[],
            fourToTenBiscuits:[]
        }

        //populates biscuits with data from api to create an array of objects
        this.allBiscuits()
        this.top3Biscuit()
        this.fourToTenBiscuits()
    }

    allBiscuits = () => {
        fetch('http://localhost:3007/biscuits/')
        .then(data => data.json())
            .then((data) => {
                this.setState({
                    allBiscuits: data,
                })
            })
    }

    top3Biscuits = () => {
        fetch('http://localhost:3007/biscuits/top3')
        .then(data => data.json())
            .then((data) => {
                this.setState({
                    top3Biscuits: data,
                })
            })
    }

    fourToTenBiscuits = () => {
        fetch('http://localhost:3007/biscuits/4-10')
        .then(data => data.json())
            .then((data) => {
                this.setState({
                    fourToTenBiscuits: data,
                })
            })
    }

    render() {
        return (
        
            <Biscuit ={this.state.missions}/>
        )
        }
    }