import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { interests } from "../../utils/helper";
import GlobalText from "../global/GlobalText";
import GlobalButton from "../global/GlobalButton";


type SignupInterestType = {
    setAllInterests: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
    selectedInterests: string[];
};


export default function SignupInterest({
    setAllInterests,
    selectedInterests
}: SignupInterestType): JSX.Element {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');


    useEffect(() => {
        if (
            (type && (type !== 'ticket-buyer'))
        ||  !type
        ) {
            navigate("/");
        }
    }, []);


    return (
        <>
            <GlobalText
                text="Select your Interest"
                className="text-center !text-primary"
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
                onClick={() => navigate(`/auth/signup?type=${type}&stage=other`)}
                theme="primary"
                className="mx-auto"
            />
        </>
    )
}