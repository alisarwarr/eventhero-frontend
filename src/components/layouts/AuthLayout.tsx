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
    let custombackgorund = 'bg-gradient-radial bg-[length:300%_300%]';
    return <div className={`m-auto min-h-screen flex flex-col justify-center items-center ` + custombackgorund}> <Outlet /> </div>;
}