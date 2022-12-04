import React, {useContext} from "react";
import Modals from "./Modals";
import classes from './Overcon.module.css'
import Context from "../Context";

const Overcon = (props) => {



    return (
        <Modals onHide = {props.onHide}>
            <div className={classes.overcon} >
                Inside overcon
            </div>
            </Modals>
    )
}

export default Overcon;