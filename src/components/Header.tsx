import GlobalButton from "./global/GlobalButton";
import { LoginSvg } from "../images/svgIcon";


export default function Header(): JSX.Element {
    return (
        <div className="bg-primary flex items-center justify-end px-2.5 sm:px-3.5 lg:px-5 py-2 sm:py-2 lg:py-3.5 w-full">

            <GlobalButton
                text="Login"
                className="!py-2 lg:!py-1.5 !px-4 lg:!px-3.5"
                icon={<LoginSvg className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4" />}
                onClick={() => alert("Login!")}
                hovered
            />

        </div>
    )
}