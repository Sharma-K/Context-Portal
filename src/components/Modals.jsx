import React from "react";
import  ReactDOM  from "react-dom";
import Overlay from "./Overlay";
import classes from './Modals.module.css'
const ModalOverlays = () => {
    return (
        <div className={classes.modoverlays}>
            This is modal Overlays
        </div>
    )
}
const Modals = () => {

  

    <React.Fragment>
       
        {ReactDOM.createPortal(<Overlay ><ModalOverlays /> </Overlay>, document.getElementById('layout'))}
        {ReactDOM.createPortal(<ModalOverlays />, document.getElementById('layout'))}
       
    </React.Fragment>


}
export default Modals;