import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h3>No of Cakes - {props.noOfCakes}</h3>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        noOfCakes: state.noOfCakes
    }
}

const mapDispatchProps = dispatch => {
    return {
        buyCake: () => { dispatch(buyCake()) }
    }
}

export default connect(
    mapStatetoProps, mapDispatchProps
)(CakeContainer)