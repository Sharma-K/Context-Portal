import React, {useContext} from "react";
import  ReactDOM  from "react-dom";
import Overlay from "./Overlay";
import classes from './Modals.module.css'
import Context from "../Context";
const ModalOverlays = (props) => {

    const ctx = useContext(Context);
    const hideHandler = () => {
        ctx.setShowModal(false);
    }

    return (
        <div className={classes.modoverlays}>
           <div>
           {props.children}
           </div>
           <div>
            <button onClick={hideHandler}>Close</button>
           </div>
        </div>
    )
}
const Modals = (props) => {



    return (<React.Fragment>
         
        {ReactDOM.createPortal(<Overlay  />, document.getElementById('layout'))}
        {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, document.getElementById('layout'))}
       
    </React.Fragment>
    )


}
export default Modals;