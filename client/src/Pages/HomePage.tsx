import React from "react";
import * as stylex from "@stylexjs/stylex";
import Layout from "../Components/UI/Layout";
import FlexboxLayout from "../Components/UI/FlexboxLayout";
import GridLayout from "../Components/UI/GridLayout";

const styleHomePage = stylex.create({
  home: {
    position: "relative",
  },
  floatingBox: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#dc004e",
    color: "white",
    padding: "1rem",
    borderRadius: "4px",
  },
  scrollableBox: {
    maxHeight: "200px",
    overflow: "auto",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginTop: "1rem",
  },
});

const HomePage: React.FC = () => {
  return (
    <div>
      <Layout>
        <div {...stylex.props(styleHomePage.home)}>
          <div {...stylex.props(styleHomePage.floatingBox)}> BOX</div>
          <div {...stylex.props(styleHomePage.scrollableBox)}>
            <p></p>
          </div>
        </div>
        <GridLayout></GridLayout>
      </Layout>
      <FlexboxLayout></FlexboxLayout>
    </div>
  );
};

export default HomePage;
