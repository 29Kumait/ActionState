import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import styles from "./styles.jsx";
import Page from "./Pages/Page.jsx";
import PageLogin from "./Pages/PageLogin.jsx";
import PageLoginAgain from "./Pages/PageLoginAgain.jsx";
import HomePage from "./Pages/HomePage.tsx";

const styleApp = stylex.create({
  text: {
    color: "#4b51b7",
    alignItems: "center",
    borderColor: "#4a86c7",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 2,
    display: "flex",
    flexBasis: 0,
    flexGrow: 1,
    height: "auto",
    justifyContent: "center",
    marginEnd: 29,
    marginStart: 29,
    paddingEnd: 8,
    paddingStart: 8,
    maxWidth: "29vw",
    backgroundColor: "rbg(106,115,123)",
    paddingTop: 100,
    textAlign: "center",
  },
});

function App() {
  return (
    <div {...stylex.props(styles.base)}>
      <h1 {...stylex.props(styleApp.text)}>Test</h1>

      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/page-login" element={<PageLogin />} />
          <Route path="/page-login-again" element={<PageLoginAgain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
