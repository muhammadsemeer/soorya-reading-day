import React, { useContext, useEffect } from "react";
import "./tailwind.css";
import 'remixicon/fonts/remixicon.css'
import {
  Switch,
  Route,
  Link, useHistory, Redirect
} from "react-router-dom";
import Home from "./pages/Home"
import SignUp from "./pages/Signup";
import Firebase from "./config/firebase"
import { AuthContext } from "./contexts/AuthContext";
import SignIn from "./pages/SignIn";
import Loader from "./components/Loader/Loader"

const App = () => {

  const { user, setUser, isAuth, setIsAuth, loading, setLoading } = useContext(AuthContext)

  const history = useHistory();

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((userData) => {
      if (userData) {
        const { displayName, email, uid } = userData;
        setUser({ name: displayName, email, uid })
        setIsAuth(true)
        setLoading(false)
      } else {
        setIsAuth(false)
        setLoading(false)
      }
    });

  }, [])

  return (
    <>
      {loading && <Loader />}
      <Switch>
        {/* Home */}
        <Route path="/" exact>
          <Home />
        </Route>

        {/* Signup */}
        <Route path="/signup">
          {isAuth ? <Redirect to="/" /> : <SignUp />}
        </Route>

        {/* Signin */}
        <Route path="/signin">
          {isAuth ? <Redirect to="/" /> : <SignIn />}
        </Route>
      </Switch>

    </>
  );
};

export default App;
