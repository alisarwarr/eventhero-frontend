import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalHeading from "../components/global/GlobalHeading";
import GlobalInput from "../components/global/GlobalInput";
import GlobalButton from "../components/global/GlobalButton";
import GlobalText from "../components/global/GlobalText";
import { interests } from "../utils/helper";


export default function Signup(): JSX.Element {
    //code
    const [code, setCode] = useState('');

    //password
    const [password, setPassword] = useState('');
    const [confirmPassword, SetConfirmPassword] = useState('');

    //details
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [cellphone, setCellphone] = useState('');

    //address
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');

    const [allInterests, setAllInterests] = useState<Record<string, boolean>>(
        interests.reduce((acc, interest) => ({ ...acc, [interest]: false }), {})
    );
    const selectedInterests = Object.entries(allInterests)
        .filter(([_, isSelected]) => isSelected)
        .map(([interest]) => interest);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const stage = searchParams.get('stage');

    useEffect(() => {
        if (stage && !['confirmation', 'password', 'details', 'address', 'interest'].includes(stage)) {
            navigate("/");
        }
    }, []);

    if (stage && !['confirmation', 'password', 'details', 'address', 'interest'].includes(stage)) return <></>

    return (
        <div className="max-w-[1600px] m-auto min-h-screen flex flex-col justify-center items-center">

            <div className={`px-4 lg:px-[2.8rem] py-9 sm:py-11 lg:py-14 space-y-5 sm:space-y-7 lg:space-y-9 w-3/4 ${stage !== 'interest' ? `sm:w-3/5 lg:w-1/2` : `sm:w-8/12 lg:w-10/12`}`}>

                <GlobalHeading
                    text={stage === "password" ? "Create Password" : "SIGN UP"}
                    className="text-center"
                />

                <div className="space-y-4 sm:space-y-5">
                    {
                        !stage && (
                            <>
                                <GlobalInput
                                    type="text"
                                    value={code}
                                    setValue={(newValue) => setCode(newValue as string)}
                                    className="w-full"
                                    label="Email Address"
                                />
                                <GlobalButton
                                    text="Signup"
                                    onClick={() => navigate("/auth/signup?stage=confirmation")}
                                    theme="primary"
                                    className="w-full justify-center"
                                />
                            </>
                        )
                    }
                    {
                        stage === 'confirmation' && (
                            <>
                                <GlobalText
                                    text="Check your inbox, we have sent you a confirmation email to the following <span style='color: red;'>johnd@emailaddres.com</span>"
                                    className="text-center !text-black"
                                />
                                <GlobalText
                                    text="If you have not received the email"
                                    className="text-center !text-black"
                                />
                                <GlobalButton
                                    text="Resend"
                                    onClick={() => alert("Resend!")}
                                    theme="primary"
                                    className="w-full justify-center"
                                />
                            </>
                        )
                    }
                    {
                        stage === 'password' && (
                            <>
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
                                    setValue={(newValue) => SetConfirmPassword(newValue as string)}
                                    className="w-full"
                                    label="Create Password"
                                />
                                <GlobalButton
                                    text="Next"
                                    onClick={() => navigate("/auth/signup?stage=details")}
                                    theme="primary"
                                    className="w-full justify-center"
                                />
                            </>
                        )
                    }
                    {
                        stage === 'details' && (
                            <>
                                <GlobalText
                                    text="Now that you have confirmed the email, lets get to know you."
                                    className="text-center !text-black"
                                    size="medium"
                                />
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
                                <GlobalButton
                                    text="Next"
                                    onClick={() => navigate("/auth/signup?stage=address")}
                                    theme="primary"
                                    className="w-full justify-center"
                                />
                            </>
                        )
                    }
                    {
                        stage === 'address' && (
                            <>
                                <GlobalText
                                    text="Let's get to know you! Please provide your address to complete."
                                    className="text-center !text-black"
                                    size="medium"
                                />
                                <GlobalInput
                                    type="text"
                                    value={streetAddress}
                                    setValue={(newValue) => setStreetAddress(newValue as string)}
                                    className="w-full"
                                    label="Street Address"
                                />
                                <GlobalInput
                                    type="text"
                                    value={city}
                                    setValue={(newValue) => setCity(newValue as string)}
                                    className="w-full"
                                    label="City"
                                />
                                <GlobalInput
                                    type="text"
                                    value={province}
                                    setValue={(newValue) => setProvince(newValue as string)}
                                    className="w-full"
                                    label="Province"
                                />
                                <GlobalInput
                                    type="text"
                                    value={country}
                                    setValue={(newValue) => setCountry(newValue as string)}
                                    className="w-full"
                                    label="Country"
                                />
                                <GlobalButton
                                    text="Complete"
                                    onClick={() => navigate("/auth/signup?stage=interest")}
                                    theme="primary"
                                    className="w-full justify-center"
                                />
                            </>
                        )
                    }
                    {
                        stage === 'interest' && (
                            <>
                                <GlobalText
                                    text="Select your Interest"
                                    className="text-center !text-black"
                                    size="medium"
                                />
                                <div
                                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                                >
                                    {interests.map((interest: string) => (
                                        <GlobalButton
                                            key={interest}
                                            text={interest}
                                            onClick={() =>
                                                setAllInterests((prevState) => ({
                                                    ...prevState,
                                                    [interest]: !prevState[interest],
                                                }))
                                            }
                                            theme="primary"
                                            isChipSelected={selectedInterests.includes(interest)}
                                        />
                                    ))}
                                </div>
                                <GlobalButton
                                    text="Next"
                                    onClick={() => navigate("/auth/signup?stage=otp")}
                                    theme="primary"
                                    className="w-full justify-center"
                                />
                            </>
                        )
                    }
                </div>

            </div>

        </div>
    )
}