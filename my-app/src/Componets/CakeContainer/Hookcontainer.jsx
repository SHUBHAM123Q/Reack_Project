import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyCake } from "../Redux/Cake/CakeActions";

const Hookcontainer = () => {
    const numofCakes = useSelector(state => state.numofCakes)
    const disptch = useDispatch()

    return(
        <div>
            <h2>Num of Cakes - {numofCakes}</h2>
            <button onClick={() => disptch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default Hookcontainer