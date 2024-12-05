//REACT
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
//REDUX-TOOLKIT
import { Provider } from "react-redux";
import { store } from "./store";
//REACT-ROUTER-DOM
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
//REACT-TOASTIFY
import { ToastContainer } from "react-toastify";
//STYLES
import "./styles/index.css";


const root = ReactDOM.createRoot(
    (document.getElementById("root") as HTMLElement)!
);

root.render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
            <ToastContainer />
        </Provider>
    </StrictMode>
);