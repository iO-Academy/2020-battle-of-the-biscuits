import React from 'react'
import './BiscuitCard.scss'
import '.././../App'

class BiscuitCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            biscuitToBeDisplayed: {},
            selected: false
        }
        this.markSelected = this.markSelected.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.BiscuitSelected !== prevProps.BiscuitSelected) {
            this.setState({
                biscuitToBeDisplayed: this.props.BiscuitSelected
            }, () => {
                if (this.state.biscuitToBeDisplayed.name == prevState.biscuitToBeDisplayed.name) {
                    this.props.generateNewCards()
                }
            })
        }
    }


    // componentDidUpdate(prevProps) {
    //     if (this.props.BiscuitSelected !== prevProps.BiscuitSelected) {
    //         this.setState({
    //             biscuitToBeDisplayed: this.props.BiscuitSelected
    //         })
    //     }
    // }

    markSelected = () => {
        this.props.generateNewCards()
        // console.log(this)
        // this.setState({
        //     selected: true
        // }, () => {
        //     this.cardSelected()
        // })
    }

    cardSelected = () => {
        console.log(this.state.selected)
        //this.markSelected()
        //this.props.generateNewCards()
        if (this.state.selected) {
            let win = this.state.biscuitToBeDisplayed.wincount++
            let compared = this.state.biscuitToBeDisplayed.comparisoncount++
            this.setState = ({
                wincount: win,
                comparisoncount: compared
            })
        } else {
            let compared = this.state.biscuitToBeDisplayed.comparisoncount++
            this.setState = ({
                comparisoncount: compared
            })
        }
        console.log(this.state.biscuitToBeDisplayed.comparisoncount)
        console.log(this.state.biscuitToBeDisplayed.wincount)
        console.log(this.state.selected)
        // some function to calculate win ratio?
    }

    render () {
        return (
            <div className="biscuitCard" onClick={this.markSelected} >
                <div className="image" style={{backgroundImage: "url(" + this.state.biscuitToBeDisplayed.img + ")"}} alt="biscuit"></div>
                <h3>{this.state.biscuitToBeDisplayed.name}</h3>
                <h3>Recommended Dunking Time: {this.state.biscuitToBeDisplayed.RDT} seconds</h3>
            </div>
        )
    }
}

export default BiscuitCard
