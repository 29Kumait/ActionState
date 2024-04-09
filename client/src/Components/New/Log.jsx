import { useActionState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import stylex from "@stylexjs/stylex";
import styles from "../../styles.jsx";
import { FetchSignIn } from "../Registers/FetchSign.server.jsx";

export default function Log() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const [formState, loginAction, isPending] = useActionState(action ,async () => {

        try {
            const formData = {
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            };
            const { token } = await FetchSignIn(formData);
            if (!token) {
                return { success: false, message: "Login failed" };
            }
            setTimeout(() => {
                navigate("/page-login-again");
            }, 2000);

            return { success: true, message: "Logged in successfully" };
        } catch (error) {
            return { success: false};
        }
    });

    return (
        <div>
            <input
                ref={usernameRef}
                type="text"
                name="username"
                required
                disabled={isPending}
            />
            <input
                ref={passwordRef}
                type="password"
                name="password"
                required
                disabled={isPending}
            />
            <button
                onClick={loginAction}
                disabled={isPending}
                {...stylex.props(styles.button)}
            >
                In
            </button>

            <p>State: {JSON.stringify(formState)}</p>
            {formState?.message && <p> {formState.message}</p>}
            <p> {formState?.message ?? 'State'}</p>
        </div>
    );
}



// import {  useTransition, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import stylex from "@stylexjs/stylex";
// import styles from "../../styles.jsx";
// import { FetchSignIn } from "../Registers/FetchSign.server.jsx";
//
// function Log() {
//     const navigate = useNavigate();
//     const usernameRef = useRef(null);
//     const passwordRef = useRef(null);
//
//     const [isPending, startTransition] = useTransition();
//
//
//     const handleSubmit = async () => {
//         startTransition(async () => {
//             const username = usernameRef.current.value;
//             const password = passwordRef.current.value;
//             await FetchSignIn({ username, password });
//             navigate("/page-login-again");
//         });
//     };
//
//     return (
//         <div>
//             <input
//                 ref={usernameRef}
//                 type="text"
//                 name="username"
//                 required
//                 disabled={isPending}
//             />
//             <input
//                 ref={passwordRef}
//                 type="password"
//                 name="password"
//                 required
//                 disabled={isPending}
//             />
//             <button
//                 onClick={handleSubmit}
//                 disabled={isPending}
//                 {...stylex.props(styles.button)}
//             >
//                  In
//             </button>
//
//         </div>
//     );
// }
// export default Log;





// import { useActionState, useTransition, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import stylex from "@stylexjs/stylex";
// import styles from "../../styles.jsx";
// import { FetchSignIn } from "../Registers/FetchSign.server.jsx";
//
// export default function Log() {
//     const navigate = useNavigate();
//     const usernameRef = useRef(null);
//     const passwordRef = useRef(null);
//
//     const [isPending, startTransition] = useTransition();
//
//     const [formState, loginAction] = useActionState(useTransition);
//
//     const handleSubmit = () => {
//         startTransition(async () => {
//             const formData = {
//                 username: usernameRef.current.value,
//                 password: passwordRef.current.value,
//             };
//
//             try {
//                 const response = await FetchSignIn(formData);
//                 if (!response.token) {
//                     loginAction({ success: false, message: "Login failed" });
//                 }
//
//                 navigate("/page-login-again");
//                 loginAction({ success: true, message: "Logged in successfully" });
//             } catch (error) {
//                 loginAction({ success: false, message: error.toString() });
//             }
//         });
//     };
//
//     return (
//         <div>
//             <input
//                 ref={usernameRef}
//                 type="text"
//                 name="username"
//                 required
//                 disabled={isPending}
//             />
//             <input
//                 ref={passwordRef}
//                 type="password"
//                 name="password"
//                 required
//                 disabled={isPending}
//             />
//             <button
//                 onClick={handleSubmit}
//                 disabled={isPending}
//                 {...stylex.props(styles.button)}
//             >
//               In
//             </button>
//
//             {formState?.message && <p>{formState.message}</p>}
//         </div>
//     );
// }


//
// import { useActionState, useTransition, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import stylex from "@stylexjs/stylex";
// import styles from "../../styles.jsx";
// import { FetchSignIn } from "../Registers/FetchSign.server.jsx";
//
// export default function Log() {
//     const navigate = useNavigate();
//     const usernameRef = useRef(null);
//     const passwordRef = useRef(null);
//     const [isPending, startTransition] = useTransition();
//
//     const [formState, loginAction] = useActionState(async () => {
//         const formData = {
//             username: usernameRef.current.value,
//             password: passwordRef.current.value,
//         };
//
//         try {
//             const response = await FetchSignIn(formData);
//             if (!response.token) {
//                 return { success: false, message: "Login failed" };
//             }
//
//             navigate("/");
//             return { success: true, message: "Logged in successfully" };
//         } catch (error) {
//             return { success: false, message: error.toString() };
//         }
//     });
//
//     const handleSubmit = () => {
//         startTransition(() => {
//             loginAction();
//         });
//     };
//
//     return (
//         <div>
//             <input
//                 ref={usernameRef}
//                 type="text"
//                 name="username"
//                 required
//                 disabled={isPending}
//             />
//             <input
//                 ref={passwordRef}
//                 type="password"
//                 name="password"
//                 required
//                 disabled={isPending}
//             />
//             <button
//                 onClick={handleSubmit}
//                 disabled={isPending}
//                 {...stylex.props(styles.button)}
//             >
//                 Log In
//             </button>
//
//             {formState?.message && <p>{formState.message}</p>}
//         </div>
//     );
// }