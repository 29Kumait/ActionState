import React from "react";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  header: {
    backgroundColor: "rgba(25,188,210,0.61)",
    color: "white",
    padding: "1rem",
    textAlign: "center",
  },
  sidebar: {
    backgroundColor: "rgba(25,188,210,0.61)",
    width: "240px",
    flexShrink: 0,
    height: "calc(100vh - 64px)",
    overflow: "auto",
    position: "fixed",
    top: "64px",
  },
  main: {
    flexGrow: 1,
    marginLeft: "240px",
    padding: "1rem",
    overflow: "auto",
    height: "calc(100vh - 64px)",
    position: "relative",
  },
});

const Layout: React.FC<React.PropsWithChildren<Record<string, unknown>>> = ({
  children,
}) => {
  return (
    <div {...stylex.props(styles.container)}>
      <header {...stylex.props(styles.header)}>
        <h1> Tittle </h1>
      </header>
      <aside {...stylex.props(styles.sidebar)}>
        <h2> SIDE </h2>
      </aside>
      <main {...stylex.props(styles.main)}>{children}</main>
    </div>
  );
};

export default Layout;
