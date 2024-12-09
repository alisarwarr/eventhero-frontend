import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GlobalText from "../global/GlobalText";
import GlobalInput from "../global/GlobalInput";
import GlobalButton from "../global/GlobalButton";
import { useFormik } from "formik";
import * as Yup from "yup";


type SignupAddressType = {
    setStreetAddress: (value: string) => void;
    setCity: (value: string) => void;
    setProvince: (value: string) => void;
    setCountry: (value: string) => void;
}


export default function SignupAddress({
    setStreetAddress,
    setCity,
    setProvince,
    setCountry
}: SignupAddressType): JSX.Element {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');


    const formik = useFormik({
        initialValues: {
            streetAddress: "",
            city: "",
            province: "",
            country: ""
        },
        validationSchema: Yup.object({
            streetAddress: Yup.string()
                .required("Street Address is required"),
            city: Yup.string()
                .required("City is required"),
            province: Yup.string()
                .required("Province is required"),
            country: Yup.string()
                .required("Country is required")
        }),
        onSubmit: (values) => {
            setStreetAddress(values.streetAddress);
            setCity(values.city);
            setProvince(values.province);
            setCountry(values.country);
            navigate(`/auth/signup?type=${type}&stage=interest`);
        }
    });


    useEffect(() => {
        if (
            (type && (type !== 'ticket-buyer'))
            || !type
        ) {
            navigate("/");
        }
    }, []);


    return (
        <form
            onSubmit={formik.handleSubmit}
            className="space-y-4 sm:space-y-5"
        >
            <GlobalText
                text="Let's get to know you! Please provide your address to complete."
                className="text-center !text-black"
                size="medium"
            />
            <div
                className="py-3 space-y-1 lg:space-y-2"
            >
                <GlobalInput
                    type="text"
                    value={formik.values.streetAddress}
                    className="w-full"
                    label="Street Address"
                    /*formik*/
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue("streetAddress", e.target.value)}
                    onBlur={formik.handleBlur}
                    error={formik.errors.streetAddress}
                    touched={formik.touched.streetAddress}
                />
                <GlobalInput
                    type="text"
                    value={formik.values.city}
                    className="w-full"
                    label="City"
                    /*formik*/
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue("city", e.target.value)}
                    onBlur={formik.handleBlur}
                    error={formik.errors.city}
                    touched={formik.touched.city}
                />
                <GlobalInput
                    type="text"
                    value={formik.values.province}
                    className="w-full"
                    label="Province"
                    /*formik*/
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue("province", e.target.value)}
                    onBlur={formik.handleBlur}
                    error={formik.errors.province}
                    touched={formik.touched.province}
                />
                <GlobalInput
                    type="text"
                    value={formik.values.country}
                    className="w-full"
                    label="Country"
                    /*formik*/
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.setFieldValue("country", e.target.value)}
                    onBlur={formik.handleBlur}
                    error={formik.errors.country}
                    touched={formik.touched.country}
                />
            </div>
            <GlobalButton
                text="Complete"
                // onClick={() => navigate(`/auth/signup?type=${type}&stage=interest`)}
                type="submit"
                theme="primary"
                className="mx-auto"
            />
        </form>
    )
}