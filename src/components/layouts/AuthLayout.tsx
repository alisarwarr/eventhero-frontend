//REDUX-TOOLKIT
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/userSlice";
//REACT-ROUTER-DOM
import { Navigate, Outlet } from "react-router-dom";


export default function AuthLayout(): JSX.Element {
    const user = useSelector(selectUser);

    // if (user) {
    //     return <Navigate to="/" replace />;
    // }

    return <MainAuthLayout />;
}

function MainAuthLayout(): JSX.Element {
    return <> <Outlet /> </>;
}