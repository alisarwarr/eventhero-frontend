import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalInput from "../global/GlobalInput";
import GlobalButton from "../global/GlobalButton";


type SignupType = {
    email: string;
    setEmail: (value: string) => void;
}


export default function Signup({
    email,
    setEmail
}: SignupType): JSX.Element {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');


    return (
        <>
            <GlobalInput
                type="text"
                value={email}
                setValue={(newValue) => setEmail(newValue as string)}
                className="w-full"
                label="Email Address"
            />
            <GlobalButton
                text="Signup"
                onClick={() => navigate(`/auth/signup?type=${type}&stage=confirmation`)}
                theme="primary"
                className="mx-auto"
            />
        </>
    )
}