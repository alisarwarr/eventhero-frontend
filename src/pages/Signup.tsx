import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalHeading from "../components/global/GlobalHeading";
import GlobalInput from "../components/global/GlobalInput";
import GlobalButton from "../components/global/GlobalButton";
import GlobalText from "../components/global/GlobalText";
import GlobalTextarea from "../components/global/GlobalTextarea";
import GlobalOtp from "../components/global/GlobalOtp";
import GlobalCard from "../components/global/GlobalCard";
import GlobalUpload from "../components/global/GlobalUpload";
import { interests } from "../utils/helper";


export default function Signup(): JSX.Element {
    //confirmation
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

    //other
    const [other, setOther] = useState('');

    //otp
    const [otp, setOtp] = useState('');
    console.log("otp", otp);

    //interest
    const [allInterests, setAllInterests] = useState<Record<string, boolean>>(
        interests.reduce((acc, interest) => ({ ...acc, [interest]: false }), {})
    );
    const selectedInterests = Object.entries(allInterests)
        .filter(([_, isSelected]) => isSelected)
        .map(([interest]) => interest);

    //business
    const [businessDoc, setBusinessDoc] = useState('');
    console.log("businessDoc", businessDoc);
    const [businessOtp, setBusinessOtp] = useState('');
    console.log("businessOtp", businessOtp);

    //individual
    const [individualDoc, setIndividualDoc] = useState('');
    console.log("individualDoc", individualDoc);
    const [individualOtp, setIndividualOtp] = useState('');
    console.log("individualOtp", individualOtp);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const stage = searchParams.get('stage');
    const business = searchParams.get('business');
    const individual = searchParams.get('individual');

    useEffect(() => {
        if (stage && !['confirmation', 'password', 'details', 'address', 'interest', 'other', 'otp', 'business'].includes(stage)) {
            navigate("/");
        }
    }, []);

    if (stage && !['confirmation', 'password', 'details', 'address', 'interest', 'other', 'otp', 'business'].includes(stage)) return <div></div>;

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
                                    className="mx-auto"
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
                                    className="mx-auto"
                                />
                            </>
                        )
                    }
                    {
                        stage === 'password' && (
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
                                        setValue={(newValue) => SetConfirmPassword(newValue as string)}
                                        className="w-full"
                                        label="Create Password"
                                    />
                                </div>
                                <GlobalButton
                                    text="Next"
                                    onClick={() => navigate("/auth/signup?stage=details")}
                                    theme="primary"
                                    className="mx-auto"
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
                                    onClick={() => navigate("/auth/signup?stage=address")}
                                    theme="primary"
                                    className="mx-auto"
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
                                <div
                                    className="py-3 space-y-1 lg:space-y-2"
                                >
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
                                </div>
                                <GlobalButton
                                    text="Complete"
                                    onClick={() => navigate("/auth/signup?stage=interest")}
                                    theme="primary"
                                    className="mx-auto"
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
                                    className="py-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-3"
                                >
                                    {interests.map((interest: string) => (
                                        <GlobalButton
                                            key={interest}
                                            text={interest}
                                            onClick={() => {
                                                setAllInterests((prevState) => ({
                                                    ...prevState,
                                                    [interest]: !prevState[interest],
                                                }))
                                            }}
                                            theme="primary"
                                            isChipSelected={selectedInterests.includes(interest)}
                                        />
                                    ))}
                                </div>
                                <GlobalButton
                                    text="Next"
                                    onClick={() => navigate("/auth/signup?stage=other")}
                                    theme="primary"
                                    className="mx-auto"
                                />
                            </>
                        )
                    }
                    {
                        stage === 'other' && (
                            <>
                                <GlobalText
                                    text="Add your interest as many as you need separated by commas. <i style='color: gray; text'>(e.g Kwaito, pop)</i>"
                                    className="text-center !text-black"
                                    size="medium"
                                />
                                <div
                                    className="py-3 space-y-1 lg:space-y-2"
                                >
                                    <GlobalTextarea
                                        value={other}
                                        setValue={(newValue) => setOther(newValue as string)}
                                        className="w-full resize-none"
                                    />
                                    <GlobalButton
                                        text="Save the Interest"
                                        onClick={() => navigate("/auth/signup?stage=otp")}
                                        className="mx-auto"
                                        hovered
                                        size="medium"
                                    />
                                </div>
                                <GlobalButton
                                    text="Next"
                                    onClick={() => navigate("/auth/signup?stage=otp")}
                                    theme="primary"
                                    className="mx-auto"
                                />
                            </>
                        )
                    }
                    {
                        stage === 'otp' && (
                            <>
                                <GlobalText
                                    text="Check your inbox, we have sent you an OTP to the following number <span style='color: red;'>+27 83 123 4567</span>"
                                    className="text-center !text-black"
                                />
                                <GlobalText
                                    text="If you have not received the OTP"
                                    className="text-center !text-black"
                                />
                                <GlobalButton
                                    text="Resend"
                                    onClick={() => alert("Resend!")}
                                    theme="primary"
                                    className="mx-auto"
                                />
                                <GlobalOtp
                                    length={6}
                                    onChange={(newValue) => setOtp(newValue as string)}
                                    className="my-2.5"
                                />
                            </>
                        )
                    }
                    {
                        stage === 'business' && !business && !individual && (
                            <>
                                <GlobalText
                                    text="Business"
                                    className="text-center !text-black"
                                    size="medium"
                                />
                                <div
                                    className="py-3 flex items-center justify-center gap-2 lg:gap-3"
                                >
                                    <GlobalCard
                                        text="Individual"
                                        hovered
                                    />
                                    <GlobalCard
                                        text="Registered Business"
                                        hovered
                                    />
                                </div>
                            </>
                        )
                    }
                    {
                        stage === 'business' && business === 'upload' && (
                            <>
                                <GlobalText
                                    text="Upload business registration Certificate"
                                    className="text-center !text-black"
                                    size="medium"
                                />
                                <GlobalUpload
                                    onUpload={(file: File) => setBusinessDoc(file.name)}
                                />
                            </>
                        )
                    }
                    {
                        stage === 'business' && individual === 'upload' && (
                            <>
                                <GlobalText
                                    text="Upload business registration Certificate"
                                    className="text-center !text-black"
                                    size="medium"
                                />
                                <GlobalUpload
                                    onUpload={(file: File) => setIndividualDoc(file.name)}
                                />
                            </>
                        )
                    }
                    {
                        stage === 'business' && business === 'details' && (
                            <div
                                className="space-y-4 sm:space-y-6 lg:space-y-8 border-2 border-primary px-4 lg:px-5 py-7 lg:py-8 rounded-md w-11/2 sm:w-9/12 mx-auto"
                            >
                                <GlobalText
                                    text="Confirm Details"
                                    className="text-center !text-primary"
                                />
                                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                                    <div className="flex items-start">
                                        <GlobalText
                                            text="Registration Number :"
                                            className="!text-black"
                                            size="medium"
                                        />
                                        <GlobalText
                                            text="2024/05078/09"
                                            className="!text-black !font-thin"
                                            size="medium"
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <GlobalText
                                            text="Enterprise Name :"
                                            className="!text-black"
                                            size="medium"
                                        />
                                        <GlobalText
                                            text="John Doe Trading"
                                            className="!text-black !font-thin"
                                            size="medium"
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <GlobalText
                                            text="Enterprise Status :"
                                            className="!text-black"
                                            size="medium"
                                        />
                                        <GlobalText
                                            text="In Business"
                                            className="!text-black !font-thin"
                                            size="medium"
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <GlobalText
                                            text="Tax Number :"
                                            className="!text-black"
                                            size="medium"
                                        />
                                        <GlobalText
                                            text="7877974664"
                                            className="!text-black !font-thin"
                                            size="medium"
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <GlobalText
                                            text="Address :"
                                            className="!text-black"
                                            size="medium"
                                        />
                                        <GlobalText
                                            text="12 Fifteen Avenue, 75 Apartment, Johannesburg, Gauteng, 1685"
                                            className="!text-black !font-thin"
                                            size="medium"
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <GlobalText
                                            text="Directors :"
                                            className="!text-black"
                                            size="medium"
                                        />
                                        <GlobalText
                                            text="John Doe, Mary Doe, John Smith"
                                            className="!text-black !font-thin"
                                            size="medium"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center gap-1 lg:gap-2">
                                    <GlobalButton
                                        text="Edit"
                                        onClick={() => alert("Edit!")}
                                        hovered
                                    />
                                    <GlobalButton
                                        text="Confirm"
                                        onClick={() => alert("Confirm!")}
                                        theme="primary"
                                        hovered
                                    />
                                </div>
                            </div>
                        )
                    }
                    {
                        stage === 'business' && individual === 'details' && (
                            <div
                                className="space-y-4 sm:space-y-6 lg:space-y-8 border-2 border-primary px-4 lg:px-5 py-7 lg:py-8 rounded-md w-11/2 sm:w-9/12 mx-auto"
                            >
                                <GlobalText
                                    text="Confirm Details"
                                    className="text-center !text-primary"
                                />
                                <div className="py-3 space-y-2 sm:space-y-3 lg:space-y-4">
                                    <div className="flex items-start">
                                        <GlobalText
                                            text="Street Name :"
                                            className="!text-black"
                                            size="medium"
                                        />
                                        <GlobalText
                                            text="Silverbell Street"
                                            className="!text-black !font-thin"
                                            size="medium"
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <GlobalText
                                            text="Unit/House number :"
                                            className="!text-black"
                                            size="medium"
                                        />
                                        <GlobalText
                                            text="72"
                                            className="!text-black !font-thin"
                                            size="medium"
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <GlobalText
                                            text="Complex :"
                                            className="!text-black"
                                            size="medium"
                                        />
                                        <GlobalText
                                            text="Eco Park Estate"
                                            className="!text-black !font-thin"
                                            size="medium"
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <GlobalText
                                            text="City/Suburb :"
                                            className="!text-black"
                                            size="medium"
                                        />
                                        <GlobalText
                                            text="Centurion"
                                            className="!text-black !font-thin"
                                            size="medium"
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <GlobalText
                                            text="Province :"
                                            className="!text-black"
                                            size="medium"
                                        />
                                        <GlobalText
                                            text="Gauteng"
                                            className="!text-black !font-thin"
                                            size="medium"
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <GlobalText
                                            text="Country :"
                                            className="!text-black"
                                            size="medium"
                                        />
                                        <GlobalText
                                            text="South Africa"
                                            className="!text-black !font-thin"
                                            size="medium"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center gap-1 lg:gap-2">
                                    <GlobalButton
                                        text="Edit"
                                        onClick={() => alert("Edit!")}
                                        hovered
                                    />
                                    <GlobalButton
                                        text="Confirm"
                                        onClick={() => alert("Confirm!")}
                                        theme="primary"
                                        hovered
                                    />
                                </div>
                            </div>
                        )
                    }
                    {
                        stage === 'business' && business === 'otp' && (
                            <>
                                <GlobalText
                                    text="OTP"
                                    className="text-center !text-black"
                                    size="medium"
                                />
                                <div
                                    className="py-3 space-y-2 sm:space-y-3 lg:space-y-4"
                                >
                                    <GlobalText
                                        text="Check your inbox, we have sent you an OTP to the following number <span style='color: red;'>+27 83 123 4567</span>"
                                        className="text-center !text-black"
                                    />
                                    <GlobalText
                                        text="If you have not received the OTP"
                                        className="text-center !text-black"
                                    />
                                    <GlobalButton
                                        text="Resend"
                                        onClick={() => alert("Resend!")}
                                        theme="primary"
                                        className="mx-auto"
                                    />
                                </div>
                                <GlobalOtp
                                    length={6}
                                    onChange={(newValue) => setBusinessDoc(newValue as string)}
                                    className="my-2.5"
                                />
                            </>
                        )
                    }
                    {
                        stage === 'business' && individual === 'otp' && (
                            <>
                                <GlobalText
                                    text="OTP"
                                    className="text-center !text-black"
                                    size="medium"
                                />
                                <div
                                    className="py-3 space-y-2 sm:space-y-3 lg:space-y-4"
                                >
                                    <GlobalText
                                        text="Check your inbox, we have sent you an OTP to the following number <span style='color: red;'>+27 83 123 4567</span>"
                                        className="text-center !text-black"
                                    />
                                    <GlobalText
                                        text="If you have not received the OTP"
                                        className="text-center !text-black"
                                    />
                                    <GlobalButton
                                        text="Resend"
                                        onClick={() => alert("Resend!")}
                                        theme="primary"
                                        className="mx-auto"
                                    />
                                </div>
                                <GlobalOtp
                                    length={6}
                                    onChange={(newValue) => setIndividualOtp(newValue as string)}
                                    className="my-2.5"
                                />
                            </>
                        )
                    }
                </div>

            </div>

        </div>
    )
}