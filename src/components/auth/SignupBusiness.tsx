import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalText from "../global/GlobalText";
import GlobalCard from "../global/GlobalCard";


type SignupBusinessType = {
    setBusiness: (value: string) => void;
}


export default function SignupBusiness({
    setBusiness
}: SignupBusinessType): JSX.Element {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');


    useEffect(() => {
        if (
            (type && (type !== 'ticket-seller'))
            || !type
        ) {
            navigate("/");
        }
    }, []);


    return (
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
                    onClick={() => {
                        setBusiness('individual');
                        navigate('/auth/signup?type=ticket-seller&stage=business&business=upload');
                    }}
                    hovered
                />
                <GlobalCard
                    text="Registered Business"
                    onClick={() => {
                        setBusiness('registered');
                        navigate('/auth/signup?type=ticket-seller&stage=business&individual=upload');
                    }}
                    hovered
                />
            </div>
        </>
    )
}