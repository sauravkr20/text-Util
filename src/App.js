import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    // type is for different types of alerts
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Utils- dark mode";
      // setInterval(()=>{
      //   document.title='text utils is amazing'
      // }, 1000)
      // setInterval(() => {
      //   document.title = "text utils is op";
      // }, 1500);
    } else {
      setMode("light");
      showAlert("light mode has been enabled", "success");
      document.title = "Text Utils- light mode";
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        colode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the text to analyze below" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
