import Navbar from "./components/Navbar";
import React from "react";
import Modals from "./components/Modals";
import Overlay from "./components/Overlay";
import Container from "./components/Container";
import Overcon from "./components/Overcon";
import Context from "./Context";

function App() {

  const [showModal, setShowModal] = React.useState(false);
  const [showcon, setShowCon] = React.useState(false);

  const showModalHandler = () =>{

  
    setShowModal(true);
  }
  const hideModalHandler = () => {
   
    setShowModal(false);
  }
  



  return (
    <Context.Provider value={{showModal, setShowModal}} >
    <div className="App">
      {showModal && <Overcon onHide={hideModalHandler} /> }
    
      <Navbar show={showModalHandler} />
    </div>
    </Context.Provider>
  );
}

export default App;
