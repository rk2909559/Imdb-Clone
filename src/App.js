import react,{useState} from "react";
import Signin from "../src/component/Signin"
import Homepage from "./component/Homepage";
import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {

  const [user,setLoginuser]=useState({})


  return (
    <>
    <Navbar/>
    <Homepage/>
      
      {/* <Router>

        {/* <Navbar /> */}

        {/* <div className="App">
          <Switch>
            <Route exact path="/">
            <Navbar />
              {
                user && user._id ?  <Homepage/> : <Signin setLoginuser={setLoginuser}/>
              }
              
            </Route>
            <Route exact path="/Login" >
              <Signin  setLoginuser={setLoginuser}/>
            </Route>
            <Route exact path="/Signup" >
              < Signup />
            </Route>
            


          </Switch>
        </div>

      </Router> */} 

    </>
  );
}

export default App;
