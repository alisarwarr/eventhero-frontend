//REDUX-TOOLKIT
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/userSlice";
//REACT-ROUTER-DOM
import { Navigate, Outlet } from "react-router-dom";


export default function Layout(): JSX.Element {
    const user = useSelector(selectUser);

    // if (!user) {
    //     return <Navigate to="/auth/signin" replace />;
    // }

    return <MainLayout />;
}

function MainLayout(): JSX.Element {
    return <div className="m-auto min-h-screen flex flex-col justify-center items-center bg-secondary"> <Outlet /> </div>;
}