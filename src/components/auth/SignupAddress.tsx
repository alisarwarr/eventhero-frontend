import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalText from "../global/GlobalText";
import GlobalInput from "../global/GlobalInput";
import GlobalButton from "../global/GlobalButton";


type SignupAddressType = {
    streetAddress: string;
    setStreetAddress: (value: string) => void;
    city: string;
    setCity: (value: string) => void;
    province: string;
    setProvince: (value: string) => void;
    country: string;
    setCountry: (value: string) => void;
}


export default function SignupAddress({
    streetAddress,
    setStreetAddress,
    city,
    setCity,
    province,
    setProvince,
    country,
    setCountry
}: SignupAddressType): JSX.Element {
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
                text="Let's get to know you! Please provide your address to complete."
                className="text-center !text-primary"
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
                onClick={() => navigate(`/auth/signup?type=${type}&stage=interest`)}
                theme="primary"
                className="mx-auto"
            />
        </>
    )
}