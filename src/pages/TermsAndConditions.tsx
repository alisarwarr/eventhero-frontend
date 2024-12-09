import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import GlobalCheckbox from "../components/global/GlobalCheckbox";
import GlobalHeading from "../components/global/GlobalHeading";
import GlobalText from "../components/global/GlobalText";
import GlobalButton from "../components/global/GlobalButton";


export default function Page(): JSX.Element {
    const [checked, setChecked] = useState(false);
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');


    return (
        <div className="px-4 lg:px-[2.8rem] py-9 sm:py-11 lg:py-14 space-y-4 sm:space-y-5 lg:space-y-7 w-3/4 sm:w-3/5 lg:w-1/2">

            <GlobalHeading
                text="Terms & Conditions"
                className="text-center"
            />

            <div className="py-3 space-y-7 sm:space-y-9 lg:space-y-11 flex flex-col items-center justify-center">

                <GlobalText
                    text="Read and accept the our Terms & Conditions"
                    className="!text-primary !w-auto"
                    size="medium"
                />

                <div className="space-y-1 sm:space-y-2 lg:space-y-3">

                    <div className="space-y-1 lg:space-y-2">
                        <GlobalText
                            text="Introduction"
                            className="text-center !text-primary"
                            size="medium"
                        />
                        <GlobalText
                            text="Welcome to [Your Business Name]! These terms and conditions outline the rules and regulations for the use of [Your Business Name]'s Website, located at [yourwebsite.com]. By accessing this website, we assume you accept these terms and conditions. Do not continue to use [Your Business Name] if you do not agree to all of the terms and conditions stated on this page."
                            className="text-center !text-primary"
                            size="medium"
                        />
                    </div>

                    <div className="space-y-1 lg:space-y-2">
                        <GlobalText
                            text="License"
                            className="text-center !text-primary"
                            size="medium"
                        />
                        <GlobalText
                            text="Unless otherwise stated, [Your Business Name] and/or its licensors own the intellectual property rights for all material on [Your Business Name]. All intellectual property rights are reserved. You may access this from [Your Business Name] for your own personal use subjected to restrictions set in these terms and conditions."
                            className="text-center !text-primary"
                            size="medium"
                        />
                    </div>

                </div>

                <GlobalCheckbox
                    checked={checked}
                    setChecked={setChecked}
                    label="I accept the Terms & Conditions"
                />

            </div>

            <GlobalButton
                text="Next"
                onClick={() => alert(`/auth/signup?type=${type}&stage=otp`)}
                theme="primary"
                className="mx-auto !my-4"
            />

        </div>
    )
}