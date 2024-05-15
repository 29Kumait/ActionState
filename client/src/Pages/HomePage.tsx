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
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "white",
    padding: "1rem",
    borderRadius: "4px",
  },
  scrollableBox: {
    maxHeight: "200px",
    overflow: "auto",
    padding: "1rem",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(26,74,121,0.43)",
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
        \
      </Layout>

      <GridLayout></GridLayout>

      <FlexboxLayout></FlexboxLayout>
    </div>
  );
};

export default HomePage;
