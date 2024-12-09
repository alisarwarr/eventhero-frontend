import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalText from "../global/GlobalText";
import GlobalButton from "../global/GlobalButton";


export default function SignupBusinessDetails(): JSX.Element {
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
        <div
            className="space-y-4 sm:space-y-6 lg:space-y-8 border-2 border-primary px-4 lg:px-5 py-7 lg:py-8 rounded-md w-11/2 sm:w-9/12 mx-auto"
        >
            <GlobalText
                text="Confirm Details"
                className="text-center !text-black"
            />
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <div className="flex items-start">
                    <GlobalText
                        text="Registration Number :"
                        className="!text-primary"
                        size="medium"
                    />
                    <GlobalText
                        text="2024/05078/09"
                        className="!text-primary !font-light"
                        size="medium"
                    />
                </div>
                <div className="flex items-start">
                    <GlobalText
                        text="Enterprise Name :"
                        className="!text-primary"
                        size="medium"
                    />
                    <GlobalText
                        text="John Doe Trading"
                        className="!text-primary !font-light"
                        size="medium"
                    />
                </div>
                <div className="flex items-start">
                    <GlobalText
                        text="Enterprise Status :"
                        className="!text-primary"
                        size="medium"
                    />
                    <GlobalText
                        text="In Business"
                        className="!text-primary !font-light"
                        size="medium"
                    />
                </div>
                <div className="flex items-start">
                    <GlobalText
                        text="Tax Number :"
                        className="!text-primary"
                        size="medium"
                    />
                    <GlobalText
                        text="7877974664"
                        className="!text-primary !font-light"
                        size="medium"
                    />
                </div>
                <div className="flex items-start">
                    <GlobalText
                        text="Address :"
                        className="!text-primary"
                        size="medium"
                    />
                    <GlobalText
                        text="12 Fifteen Avenue, 75 Apartment, Johannesburg, Gauteng, 1685"
                        className="!text-primary !font-light"
                        size="medium"
                    />
                </div>
                <div className="flex items-start">
                    <GlobalText
                        text="Directors :"
                        className="!text-primary"
                        size="medium"
                    />
                    <GlobalText
                        text="John Doe, Mary Doe, John Smith"
                        className="!text-primary !font-light"
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