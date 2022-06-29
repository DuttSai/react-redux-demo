import React from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux'


function HooksCakeContainer() {
    const noOfCakes = useSelector(state=>state.noOfCakes)
    console.log(useSelector(temp=>temp))
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of Cakes: {noOfCakes}</h2>
        <button onClick={()=>dispatch(buyCake())}>Add Cake</button>
    </div>
  )
}

export default HooksCakeContainer