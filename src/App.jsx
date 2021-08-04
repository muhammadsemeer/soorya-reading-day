import React, { useContext, useEffect } from "react";
import "./tailwind.css";
import 'remixicon/fonts/remixicon.css'
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Home from "./pages/Home"
import SignUp from "./pages/Signup"
import { AuthContext } from "./contexts/AuthContext";
import SignIn from "./pages/SignIn"
import Loader from "./components/Loader/Loader"
import Quiz from "./pages/Quiz"
import Add from "./components/Add/Add";
import Private from "./components/Private/Private"

const App = () => {
  const history = useHistory();
  const { loading,user } = useContext(AuthContext)
  return (
    <>
      {loading && <Loader />}

      <Switch  >
        {/* Home */}
        <Route path="/" exact component={Home} />

        {/* Signup */}
        <Private path="/signup"  >
          <SignUp />
        </Private>


        {/* Signin */}
        <Private path="/signin"  >
          <SignIn />
        </Private>


        {/* Quiz */}
        <Private path="/quiz"  >
          <Quiz />
        </Private>

        {/* Add */}
        <Route path="/add">
          <Add />
        </Route>

      </Switch>

    </>

  );
};

export default App;
