import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import Register from "./pages/register/Register";
import LeaveForm from "./pages/leaveForm/LeaveForm";
import { Context } from "./context/Context";
import Leavepage from "./pages/leavepage/Leavepage";
import Display from "./pages/display/Display";
import Approve from "./pages/approve/Approve";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
        {user ? <Home /> : <Login />}
        </Route>

        <Route path="/register">
         <Register />
        </Route>
        
        <Route path="/leave">
          <Leavepage />
        </Route>

        <Route path="/display">
          <Display />
        </Route>

        <Route path="/approve">
          <Approve />
        </Route>

        <Route path="/form">
          <LeaveForm />
        </Route>
        
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
