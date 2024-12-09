//REACT
import { FC, lazy } from "react";


//Layout
export const Home: FC = lazy(() => import("./Home"));
export const TermsAndConditions: FC = lazy(() => import("./TermsAndConditions"));
export const Error: FC = lazy(() => import("./Error"));
//AuthLayout
export const Signup: FC = lazy(() => import("./Signup"));