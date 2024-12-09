import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalText from "../global/GlobalText";
import GlobalInput from "../global/GlobalInput";
import GlobalButton from "../global/GlobalButton";
import { useFormik } from "formik";
import * as Yup from "yup";


type SignupDetailsType = {
    setName: (value: string) => void;
    setSurname: (value: string) => void;
    setDateOfBirth: (value: string) => void;
    setCellphone: (value: string) => void;
}


export default function SignupDetails({
    setName,
    setSurname,
    setDateOfBirth,
    setCellphone
}: SignupDetailsType): JSX.Element {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');


    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            dateOfBirth: "",
            cellphone: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            surname: Yup.string().required("Surname is required"),
            dateOfBirth: Yup.string().required("Date of Birth is required"),
            cellphone: Yup.string()
                .required("Cell phone number is required")
                .matches(
                    /^[0-9]{10}$/,
                    "Cell phone must be a 10-digit number"
                ),
        }),
        onSubmit: (values) => {
            setName(values.name);
            setSurname(values.surname);
            setDateOfBirth(values.dateOfBirth);
            setCellphone(values.cellphone);
            navigate(`/auth/signup?type=${type}&stage=address`);
        }
    });


    return (
        <form
            onSubmit={formik.handleSubmit}
            className="space-y-4 sm:space-y-5"
        >
            <GlobalText
                text="Now that you have confirmed the email, lets get to know you."
                className="text-center"
                size="medium"
            />
            <div
                className="py-3 space-y-1 lg:space-y-2"
            >
                <GlobalInput
                    type="text"
                    value={formik.values.name}
                    className="w-full"
                    label="Name"
                    /*formik*/
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue("name", e.target.value)}
                    onBlur={formik.handleBlur}
                    error={formik.errors.name}
                    touched={formik.touched.name}
                />
                <GlobalInput
                    type="text"
                    value={formik.values.surname}
                    className="w-full"
                    label="Surname"
                    /*formik*/
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue("surname", e.target.value)}
                    onBlur={formik.handleBlur}
                    error={formik.errors.surname}
                    touched={formik.touched.surname}
                />
                <GlobalInput
                    type="text"
                    value={formik.values.dateOfBirth}
                    className="w-full"
                    label="Date Of Birth"
                    /*formik*/
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue("dateOfBirth", e.target.value)}
                    onBlur={formik.handleBlur}
                    error={formik.errors.dateOfBirth}
                    touched={formik.touched.dateOfBirth}
                />
                <GlobalInput
                    type="text"
                    value={formik.values.cellphone}
                    className="w-full"
                    label="Cell Phone"
                    /*formik*/
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue("cellphone", e.target.value)}
                    onBlur={formik.handleBlur}
                    error={formik.errors.cellphone}
                    touched={formik.touched.cellphone}
                />
            </div>
            <GlobalButton
                text="Next"
                // onClick={() => navigate(`/auth/signup?type=${type}&stage=address`)}
                type="submit"
                theme="primary"
                className="mx-auto"
            />
        </form>
    )
}