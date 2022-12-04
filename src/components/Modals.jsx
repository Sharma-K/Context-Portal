import React from "react";
import  ReactDOM  from "react-dom";
import Overlay from "./Overlay";
import classes from './Modals.module.css'
const ModalOverlays = (props) => {

  console.log(props);
    return (
        <div className={classes.modoverlays}>
           <div>
           {props.children}
           </div>
           <div>
            <button onClick={props.onHide}>Close</button>
           </div>
        </div>
    )
}
const Modals = (props) => {



    return (<React.Fragment>
         
        {ReactDOM.createPortal(<Overlay onHide={props.onHide} />, document.getElementById('layout'))}
        {ReactDOM.createPortal(<ModalOverlays onHide={props.onHide}>{props.children}</ModalOverlays>, document.getElementById('layout'))}
       
    </React.Fragment>
    )


}
export default Modals;