type GlobalTextareaType = {
    value: string | number;
    setValue: (value: string | number) => void;
    className?: string;
}


export default function GlobalTextarea({
    value,
    setValue,
    className
}: GlobalTextareaType): JSX.Element {
    return (
        <textarea
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
            className={`text-sm lg:text-base bg-secondary text-black border-2 border-primary outline-none self-start p-0.5 sm:p-1 lg:p-1.5 rounded-md ` + className}
        />
    )
}