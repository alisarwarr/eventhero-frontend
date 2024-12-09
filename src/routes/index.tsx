//PAGES
import {
    //Layout
    Home, TermsAndConditions, Error,
    //AuthLayout
    Signup
} from "../pages";
//REACT-ROUTER-DOM
import { createBrowserRouter, Outlet } from "react-router-dom";
//LAYOUTS
import Layout from "../components/layouts/Layout";
import AuthLayout from "../components/layouts/AuthLayout";
//ERROR-BOUNDARY
import ErrorBoundary from "../components/ErrorBoundary";
//SUSPENSE-WRAPPER
import SuspenseWrapper from "../components/SuspenseWrapper";


export const router = createBrowserRouter([
    {
        element: <ErrorBoundary> <Outlet /> </ErrorBoundary>,
        children: [
            {
                path: "/",
                element: <SuspenseWrapper> <Layout /> </SuspenseWrapper>,
                children: [
                    { path: "/", element: <SuspenseWrapper> <Home /> </SuspenseWrapper> },
                    { path: "/terms-and-conditions", element: <SuspenseWrapper> <TermsAndConditions /> </SuspenseWrapper> },
                ]
            },
            {
                path: "/auth",
                element: <SuspenseWrapper children={<AuthLayout />} />,
                children: [
                    { path: "signup", element: <SuspenseWrapper> <Signup /> </SuspenseWrapper> },
                ]
            },
            {
                path: "*",
                element: <SuspenseWrapper> <Error /> </SuspenseWrapper>
            }
        ]
    }
]);