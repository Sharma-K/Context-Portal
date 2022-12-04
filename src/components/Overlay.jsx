
import React, { useContext } from "react";
import classes from './Overlay.module.css'

import Context from "../Context";
const Overlay = () => {

    const ctx = useContext(Context);

    const hideHandler = () => {
        ctx.setShowModal(false);
    }

    return (
        
        <div className={classes.overlay} onClick={hideHandler}></div>
    )

}
export default Overlay;