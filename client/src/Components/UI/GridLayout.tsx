import React from "react";
import * as stylex from "@stylexjs/stylex";

const stylesGridLayout = stylex.create({
  container: {
    display: "grid",
    gridTemplateRows: "auto 1fr",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
  },
  header: {
    backgroundColor: "rgba(25,188,210,0.61)",
    color: "white",
    padding: "1rem",
    textAlign: "center",
  },
  main: {
    display: "grid",
    placeItems: "center",
    position: "relative",
    padding: "1rem",
  },
  backgroundLayer1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.7) 70%)",
    zIndex: 1,
  },
  backgroundLayer2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(45deg, rgba(255, 0, 150, 0.2), rgba(0, 200, 255, 0.2))",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: 2,
  },
  content: {
    zIndex: 3,
    color: "white",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "2rem",
    borderRadius: "10px",
  },
});

const GridLayout: React.FC = () => {
  return (
    <div {...stylex.props(stylesGridLayout.container)}>
      <header {...stylex.props(stylesGridLayout.header)}>
        <h1>Grid </h1>
      </header>
      <div {...stylex.props(stylesGridLayout.backgroundLayer1)}></div>
      <div {...stylex.props(stylesGridLayout.backgroundLayer2)}></div>
      <main {...stylex.props(stylesGridLayout.main)}>
        <div {...stylex.props(stylesGridLayout.content)}>
          <p>backgrounds light.</p>
        </div>
      </main>
    </div>
  );
};

export default GridLayout;
