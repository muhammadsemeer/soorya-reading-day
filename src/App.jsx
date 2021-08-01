import React, { useContext, useEffect } from "react";
import "./tailwind.css";
import 'remixicon/fonts/remixicon.css'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home"
import SignUp from "./pages/Signup";
import Firebase from "./config/firebase"
import { AuthContext } from "./contexts/AuthContext";
const App = () => {

  const { user, setUser } = useContext(AuthContext)

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((userData) => {
      if (userData) {
        console.log(userData)
        setUser(userData)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

  })

  return (
    <>
      <Switch>
        {/* Home */}
        <Route path="/" exact>
          <Home />
        </Route>

        {/* Signup */}
        <Route path="/signup">
          <SignUp />
        </Route>

      </Switch>

    </>
  );
};

export default App;
