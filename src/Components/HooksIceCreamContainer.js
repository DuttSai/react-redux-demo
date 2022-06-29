import React from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'


function HooksIceCreamContainer() {
    const noOfIceCreams = useSelector(state=>state.iceCream.noOfIceCreams)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of IceCreams: {noOfIceCreams}</h2>
        <button onClick={()=>dispatch(buyIceCream())}>Add IceCream</button>
    </div>
  )
}

export default HooksIceCreamContainer