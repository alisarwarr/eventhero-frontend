import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalText from "../global/GlobalText";
import GlobalUpload from "../global/GlobalUpload";


type SignupBusinessUploadType = {
    setDoc: (value: string) => void;
}


export default function SignupBusinessUpload({
    setDoc
}: SignupBusinessUploadType): JSX.Element {
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
                text="Upload business registration Certificate"
                className="text-center !text-primary"
                size="medium"
            />
            <GlobalUpload
                onUpload={(file: File) => setDoc(file.name)}
            />
        </>
    )
}