import GlobalText from "./GlobalText";


type GlobalInputType = {
    type: 'text' | 'number' | 'password'
    value: string | number;
    className?: string;
    label?: string;
    /*********************************************************/
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
    touched?: boolean;
}


export default function GlobalInput({
    type,
    value,
    className,
    label,
    /*******/
    onChange,
    onBlur,
    error,
    touched
}: GlobalInputType): JSX.Element {
    let hasError = touched && error; // Checks if field is touched and has an error

    return (
        <div
            className="space-y-1 w-full sm:11/12 lg:w-10/12 xl:w-3/4 2xl:w-3/5 mx-auto"
        >

            {label && (
                <GlobalText
                    text={label}
                    className="!text-primary"
                    size="medium"
                />
            )}

            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`text-sm lg:text-base bg-secondary text-black border-2 border-primary outline-none p-0.5 sm:p-1 lg:p-1.5 rounded-md ` + className}
                onBlur={onBlur}
            />

            {hasError && (
                <span className="text-red-500 text-xs">{error}</span>
            )}

        </div>
    )
}