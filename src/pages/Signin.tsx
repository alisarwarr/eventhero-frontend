import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalHeading from "../components/global/GlobalHeading";
import GlobalInput from "../components/global/GlobalInput";
import GlobalButton from "../components/global/GlobalButton";
import GlobalText from "../components/global/GlobalText";


export default function Signin(): JSX.Element {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const success = searchParams.get('success');

    const [value, setValue] = useState('');

    return (
        <div className="max-w-[1600px] m-auto min-h-screen flex flex-col justify-center items-center">

            <div className="px-4 sm:px-4 lg:px-[2.8rem] space-y-5 sm:space-y-7 lg:space-y-9 w-3/4 sm:w-3/5 lg:w-1/2">

                <GlobalHeading
                    text="SIGN UP"
                    className="text-center"
                />

                <div className="space-y-4 sm:space-y-5">
                    {success !== 'code' && (
                        <GlobalInput
                            type="text"
                            value={value}
                            setValue={(newValue) => setValue(newValue as string)}
                        />
                    )}
                    {success === 'code' && (
                        <>
                            <GlobalText
                                text="Check your inbox, we have sent you a confirmation email to the following <span style='color: red;'>johnd@emailaddres.com</span>"
                                className="text-center !text-black"
                            />
                            <GlobalText
                                text="If you have not received the email"
                                className="text-center !text-black"
                            />
                        </>
                    )}
                    <GlobalButton
                        text="Resend"
                        onClick={() => navigate("/auth/signin?success=code")}
                        theme="primary"
                        className="justify-center w-full"
                    />
                </div>

            </div>

        </div>
    )
}