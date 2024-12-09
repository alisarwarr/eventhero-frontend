import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { interests, stages } from "../utils/helper";
import GlobalHeading from "../components/global/GlobalHeading";
import Signup from "../components/auth/signup";
import SignupConfirmation from "../components/auth/SignupConfirmation";
import SignupPassword from "../components/auth/SignupPassword";
import SignupDetails from "../components/auth/SignupDetails";
import SignupAddress from "../components/auth/SignupAddress";
import SignupInterest from "../components/auth/SignupInterest";
import SignupOther from "../components/auth/SignupOther";
import SignupOtp from "../components/auth/SignupOtp";
import SignupBusiness from "../components/auth/SignupBusiness";
import SignupBusinessUpload from "../components/auth/SignupBusinessUpload";
import SignupBusinessDetails from "../components/auth/SignupBusinessDetails";
import SignupBusinessOtp from "../components/auth/SignupBusinessOtp";


export default function Page(): JSX.Element {
    // confirmation
    const [email, setEmail] = useState('');
    console.log("email", email);

    // password
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    console.log("password", password);
    console.log("confirmPassword", confirmPassword);

    // details
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [cellphone, setCellphone] = useState('');
    console.log("name", name);
    console.log("surname", surname);
    console.log("dateOfBirth", dateOfBirth);
    console.log("cellphone", cellphone);

    // address
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    console.log("streetAddress", streetAddress);
    console.log("city", city);
    console.log("province", province);
    console.log("country", country);

    // other
    const [other, setOther] = useState('');
    console.log("other", other);

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
    const [businessType, setBusinessType] = useState('');
    console.log("businessType", businessType);

    //individual
    const [individualDoc, setIndividualDoc] = useState('');
    console.log("individualDoc", individualDoc);
    const [individualOtp, setIndividualOtp] = useState('');
    console.log("individualOtp", individualOtp);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const stage = searchParams.get('stage');
    const business = searchParams.get('business');
    const individual = searchParams.get('individual');

    useEffect(() => {
        if (
            (stage && !stages.includes(stage))
            || (type && type !== 'ticket-seller' && type !== 'ticket-buyer')
            || !type
        ) {
            navigate("/");
        }
    }, []);

    if (stage && !stages.includes(stage)) return <></>;

    return (
        <div className={`px-4 lg:px-[2.8rem] py-9 sm:py-11 lg:py-14 space-y-5 sm:space-y-7 lg:space-y-9 w-3/4 ${stage !== 'interest' ? `sm:w-3/5 lg:w-1/2` : `sm:w-9/12 lg:w-10/12`}`}>

            <GlobalHeading
                text={stage === "password" ? "Create Password" : "SIGN UP"}
                className="text-center"
            />

            <div className="space-y-4 sm:space-y-5">
                {
                    !stage && (
                        <Signup
                            setEmail={setEmail}
                        />
                    )
                }
                {
                    stage === 'confirmation' && (
                        <SignupConfirmation />
                    )
                }
                {
                    stage === 'password' && (
                        <SignupPassword
                            setPassword={setPassword}
                            setConfirmPassword={setConfirmPassword}
                        />
                    )
                }
                {
                    stage === 'details' && (
                        <SignupDetails
                            setName={setName}
                            setSurname={setSurname}
                            setDateOfBirth={setDateOfBirth}
                            setCellphone={setCellphone}
                        />
                    )
                }
                {
                    stage === 'address' && (
                        <SignupAddress
                            setStreetAddress={setStreetAddress}
                            setCity={setCity}
                            setProvince={setProvince}
                            setCountry={setCountry}
                        />
                    )
                }
                {
                    stage === 'interest' && (
                        <SignupInterest
                            setAllInterests={setAllInterests}
                            selectedInterests={selectedInterests}
                        />
                    )
                }
                {
                    stage === 'other' && (
                        <SignupOther
                            other={other}
                            setOther={setOther}
                        />
                    )
                }
                {
                    stage === 'otp' && (
                        <SignupOtp
                            setOtp={setOtp}
                        />
                    )
                }
                {
                    stage === 'business' && !business && !individual && (
                        <SignupBusiness
                            setBusiness={setBusinessType}
                        />
                    )
                }
                {
                    stage === 'business' && business === 'upload' && (
                        <SignupBusinessUpload
                            setDoc={setBusinessDoc}
                        />
                    )
                }
                {
                    stage === 'business' && individual === 'upload' && (
                        <SignupBusinessUpload
                            setDoc={setIndividualDoc}
                        />
                    )
                }
                {
                    stage === 'business' && business === 'details' && (
                        <SignupBusinessDetails />
                    )
                }
                {
                    stage === 'business' && individual === 'details' && (
                        <SignupBusinessDetails />
                    )
                }
                {
                    stage === 'business' && business === 'otp' && (
                        <SignupBusinessOtp
                            setOtp={setBusinessOtp}
                        />
                    )
                }
                {
                    stage === 'business' && individual === 'otp' && (
                        <SignupBusinessOtp
                            setOtp={setIndividualOtp}
                        />
                    )
                }
            </div>

        </div>
    )
}