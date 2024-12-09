import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalText from "../global/GlobalText";
import GlobalTextarea from "../global/GlobalTextarea";
import GlobalButton from "../global/GlobalButton";


type SignupOtherType = {
    other: string;
    setOther: (value: string) => void;
}


export default function SignupOther({
    other,
    setOther
}: SignupOtherType): JSX.Element {
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
                text="Add your interest as many as you need separated by commas. <i style='color: gray;'>(e.g Kwaito, pop)</i>"
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
                    onClick={() => navigate(`/auth/signup?type=${type}&stage=otp`)}
                    className="mx-auto"
                    hovered
                    size="medium"
                />
            </div>
            <GlobalButton
                text="Next"
                onClick={() => navigate(`/auth/signup?type=${type}&stage=otp`)}
                theme="primary"
                className="mx-auto"
            />
        </>
    )
}