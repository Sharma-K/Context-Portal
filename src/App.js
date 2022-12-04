import Navbar from "./components/Navbar";
import React from "react";
import Modals from "./components/Modals";
import Overlay from "./components/Overlay";
import Container from "./components/Container";
import Overcon from "./components/Overcon";

function App() {

  const [showModal, setShowModal] = React.useState(false);
  const [showcon, setShowCon] = React.useState(false);

  const showModalHandler = () =>{

  
    setShowModal(true);
  }
  const hideModalHandler = () => {
    console.log('touched');
    setShowModal(false);
  }
  const showConHandler = () => {
    setShowCon(true);
  }
  const hideConHandler = () => {
    setShowCon(false);
  }



  return (
    <div className="App">
      {showModal && <Overcon onHide={hideModalHandler} /> }
    
      <Navbar show={showModalHandler} />
    </div>
  );
}

export default App;
