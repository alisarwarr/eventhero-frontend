import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalInput from "../global/GlobalInput";
import GlobalButton from "../global/GlobalButton";
import { useFormik } from "formik";
import * as Yup from "yup";


type SignupType = {
    setEmail: (value: string) => void;
}


export default function Signup({
    setEmail
}: SignupType): JSX.Element {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');


    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required")
        }),
        onSubmit: (values) => {
            setEmail(values.email);
            // navigate(`/auth/signup?type=${type}&stage=confirmation`);
        }
    });


    return (
        <form
            onSubmit={formik.handleSubmit}
            className="space-y-4 sm:space-y-5"
        >
            <GlobalInput
                type="text"
                value={formik.values.email}
                className="w-full"
                label="Email Address"
                /*formik*/
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue("email", e.target.value)}
                onBlur={formik.handleBlur}
                error={formik.errors.email}
                touched={formik.touched.email}
            />
            <GlobalButton
                text="Signup"
                type="submit"
                theme="primary"
                className="mx-auto"
            />
        </form>
    )
}