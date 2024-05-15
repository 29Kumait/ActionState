import { useFormStatus } from "react-dom";
import stylex from "@stylexjs/stylex";
import styles from "../../styles.jsx";
import actionDelay from "./ActionDelay.jsx";
import { Link } from "react-router-dom";

function Submit() {
  const status = useFormStatus();
  return (
    <div>
      <button disabled={status.pending} {...stylex.props(styles.button)}>
        {status.pending ? "Submitting..." : "Submit"}
      </button>

      <Link to="/home-page">
        <button disabled={status.pending} {...stylex.props(styles.button)}>
          {status.pending ? "Submitting..." : "Submit"}
        </button>
      </Link>
    </div>
  );
}

export default function Submitting() {
  return (
    <form action={actionDelay}>
      <Submit />
    </form>
  );
}
