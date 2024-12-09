import GlobalText from "./GlobalText";


type GlobalInputType = {
    type: 'text' | 'number' | 'password'
    value: string | number;
    setValue: (value: string | number) => void;
    className?: string;
    label?: string;
}


export default function GlobalInput({
    type,
    value,
    setValue,
    className,
    label
}: GlobalInputType): JSX.Element {
    return (
        <div
            className="space-y-1"
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                className={`bg-white text-black border-2 border-primary outline-none self-start p-0.5 sm:p-1 lg:p-1.5 rounded-md ` + className}
            />

        </div>
    )
}