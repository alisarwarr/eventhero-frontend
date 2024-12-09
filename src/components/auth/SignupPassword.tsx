import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalInput from "../global/GlobalInput";
import GlobalButton from "../global/GlobalButton";
import { useFormik } from "formik";
import * as Yup from "yup";


type SignupPasswordType = {
    setPassword: (value: string) => void;
    setConfirmPassword: (value: string) => void;
}


export default function SignupPassword({
    setPassword,
    setConfirmPassword
}: SignupPasswordType): JSX.Element {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');


    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], "Passwords must match")
                .required("Confirm Password is required")
        }),
        onSubmit: (values) => {
            setPassword(values.password);
            setConfirmPassword(values.confirmPassword);
            navigate(`/auth/signup?type=${type}&stage=details`);
        }
    });


    return (
        <form
            onSubmit={formik.handleSubmit}
            className="space-y-4 sm:space-y-5"
        >
            <div
                className="py-3 space-y-1 lg:space-y-2"
            >
                <GlobalInput
                    type="text"
                    value={formik.values.password}
                    className="w-full"
                    label="Password"
                    /*formik*/
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue("password", e.target.value)}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                />
                <GlobalInput
                    type="text"
                    value={formik.values.confirmPassword}
                    className="w-full"
                    label="Create Password"
                    /*formik*/
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue("confirmPassword", e.target.value)}
                    onBlur={formik.handleBlur}
                    error={formik.errors.confirmPassword}
                    touched={formik.touched.confirmPassword}
                />
            </div>
            <GlobalButton
                text="Next"
                // onClick={() => navigate(`/auth/signup?type=${type}&stage=details`)}
                type="submit"
                theme="primary"
                className="mx-auto"
            />
        </form>
    )
}