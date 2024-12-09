import GlobalText from "../global/GlobalText";
import GlobalButton from "../global/GlobalButton";


export default function SignupConfirmation(): JSX.Element {
    return (
        <>
            <GlobalText
                text="Check your inbox, we have sent you a confirmation email to the following <span style='color: red;'>johnd@emailaddres.com</span>"
                className="text-center !text-primary"
            />
            <GlobalText
                text="If you have not received the email"
                className="text-center !text-primary"
            />
            <GlobalButton
                text="Resend"
                onClick={() => alert("Resend!")}
                theme="primary"
                className="mx-auto"
            />
        </>
    );
}