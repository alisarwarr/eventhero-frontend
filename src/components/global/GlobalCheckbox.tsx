import GlobalText from "./GlobalText";


type GlobalCheckboxType = {
    checked: boolean;
    setChecked: (checked: boolean) => void;
    className?: string;
    label?: string;
}


export default function GlobalCheckbox({
    checked,
    setChecked,
    className,
    label,
}: GlobalCheckboxType): JSX.Element {
    return (
        <div
            className="flex items-center gap-2"
        >

            <input
                type="checkbox"
                checked={checked}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
                className={`w-4 h-4 text-primary border-2 rounded-md cursor-pointer ` + className}
            />

            {label && (
                <GlobalText
                    text={label}
                    className="text-center cursor-pointer hover:italic whitespace-nowrap"
                    size="medium"
                />
            )}

        </div>
    );
}