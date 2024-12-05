//REACT
import { FC, lazy } from "react";


//Layout
export const Home: FC = lazy(() => import("./Home"));
export const About: FC = lazy(() => import("./About"));
export const Contact: FC = lazy(() => import("./Contact"));
export const Error: FC = lazy(() => import("./Error"));
//AuthLayout
export const Signin: FC = lazy(() => import("./Signin"));
export const Signup: FC = lazy(() => import("./Signup"));