import Modals from "./Modals";
import classes from './Overcon.module.css'

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