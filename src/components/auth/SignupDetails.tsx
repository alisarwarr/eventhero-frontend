import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalText from "../global/GlobalText";
import GlobalInput from "../global/GlobalInput";
import GlobalButton from "../global/GlobalButton";


type SignupDetailsType = {
    name: string;
    setName: (value: string) => void;
    surname: string;
    setSurname: (value: string) => void;
    dateOfBirth: string;
    setDateOfBirth: (value: string) => void;
    cellphone: string;
    setCellphone: (value: string) => void;
}


export default function SignupDetails({
    name,
    setName,
    surname,
    setSurname,
    dateOfBirth,
    setDateOfBirth,
    cellphone,
    setCellphone
}: SignupDetailsType): JSX.Element {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');


    return (
        <>
            <GlobalText
                text="Now that you have confirmed the email, lets get to know you."
                className="text-center !text-primary"
                size="medium"
            />
            <div
                className="py-3 space-y-1 lg:space-y-2"
            >
                <GlobalInput
                    type="text"
                    value={name}
                    setValue={(newValue) => setName(newValue as string)}
                    className="w-full"
                    label="Name"
                />
                <GlobalInput
                    type="text"
                    value={surname}
                    setValue={(newValue) => setSurname(newValue as string)}
                    className="w-full"
                    label="Surname"
                />
                <GlobalInput
                    type="text"
                    value={dateOfBirth}
                    setValue={(newValue) => setDateOfBirth(newValue as string)}
                    className="w-full"
                    label="Date Of Birth"
                />
                <GlobalInput
                    type="text"
                    value={cellphone}
                    setValue={(newValue) => setCellphone(newValue as string)}
                    className="w-full"
                    label="Cell Phone"
                />
            </div>
            <GlobalButton
                text="Next"
                onClick={() => navigate(`/auth/signup?type=${type}&stage=address`)}
                theme="primary"
                className="mx-auto"
            />
        </>
    )
}