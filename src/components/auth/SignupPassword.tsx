import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalInput from "../global/GlobalInput";
import GlobalButton from "../global/GlobalButton";


type SignupPasswordType = {
    password: string;
    setPassword: (value: string) => void;
    confirmPassword: string;
    setConfirmPassword: (value: string) => void;
}


export default function SignupPassword({
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword
}: SignupPasswordType): JSX.Element {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');


    return (
        <>
            <div
                className="py-3 space-y-1 lg:space-y-2"
            >
                <GlobalInput
                    type="text"
                    value={password}
                    setValue={(newValue) => setPassword(newValue as string)}
                    className="w-full"
                    label="Password"
                />
                <GlobalInput
                    type="text"
                    value={confirmPassword}
                    setValue={(newValue) => setConfirmPassword(newValue as string)}
                    className="w-full"
                    label="Create Password"
                />
            </div>
            <GlobalButton
                text="Next"
                onClick={() => navigate(`/auth/signup?type=${type}&stage=details`)}
                theme="primary"
                className="mx-auto"
            />
        </>
    )
}