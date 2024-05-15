import React from "react";
import * as stylex from "@stylexjs/stylex";

const stylesFlexboxLayout = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
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
    display: "flex",
    flex: "1",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
      "linear-gradient(circle,to right bottom,  #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1, 70%)",
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

const FlexboxLayout: React.FC = () => {
  return (
    <div {...stylex.props(stylesFlexboxLayout.container)}>
      <header {...stylex.props(stylesFlexboxLayout.header)}>
        <h1>Flexbox</h1>
      </header>
      <div {...stylex.props(stylesFlexboxLayout.backgroundLayer1)}></div>
      <div {...stylex.props(stylesFlexboxLayout.backgroundLayer2)}></div>
      <main {...stylex.props(stylesFlexboxLayout.main)}>
        <div {...stylex.props(stylesFlexboxLayout.content)}>
          <h2> Background Light</h2>
        </div>
      </main>
    </div>
  );
};

export default FlexboxLayout;
