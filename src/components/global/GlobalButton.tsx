type GlobalButtonType = {
    text: string;
    icon?: JSX.Element;
    onClick: () => void;
    className?: string;
    theme?: 'default' | 'primary',
    outline?: boolean;
}


export default function GlobalButton({
    text,
    icon,
    onClick,
    className,
    theme = 'default',
    outline = false
}: GlobalButtonType): JSX.Element {

    let btnColor = "";

    if (theme === 'default') {
        btnColor = 'text-primary bg-white border border-white ' + (outline ? 'hover:text-white hover:bg-primary' : '');
    }
    else if (theme === 'primary') {
        btnColor = 'text-white bg-primary border border-primary ' + (outline ? 'hover:text-primary hover:bg-white' : '');
    }

    return (
        <button
            onClick={onClick}
            className={`${btnColor} text-xs sm:text-sm lg:text-base font-semibold tracking-wide py-2 lg:py-1.5 px-4 lg:px-3.5 rounded-md flex items-center gap-1 lg:gap-2 ` + className}
        >
            {text}
            {icon}
        </button>
    )
}