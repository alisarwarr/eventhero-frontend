import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalText from "../global/GlobalText";
import GlobalButton from "../global/GlobalButton";
import GlobalOtp from "../global/GlobalOtp";


type SignupBusinessOtpType = {
    setOtp: (value: string) => void;
}


export default function SignupBusinessOtp({
    setOtp
}: SignupBusinessOtpType): JSX.Element {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');


    useEffect(() => {
        if (
            (type && (type !== 'ticket-seller'))
        ||  !type
        ) {
            navigate("/");
        }
    }, []);


    return (
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
                    text="Check your inbox, we have sent you an OTP to the following number <span style='color: #36454F;'>+27 83 123 4567</span>"
                    className="text-center"
                />
                <GlobalText
                    text="If you have not received the OTP"
                    className="text-center"
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
                onChange={(newValue) => setOtp(newValue as string)}
                className="my-2.5"
            />
        </>
    )
}