type GlobalButtonType = {
    text: string;
    icon?: JSX.Element;
    onClick: () => void;
    className?: string;
    theme?: 'default' | 'primary',
    hovered?: boolean;
    outline?: boolean;
    isChipSelected?: boolean;
}


export default function GlobalButton({
    text,
    icon,
    onClick,
    className,
    theme = 'default',
    hovered = false,
    isChipSelected
}: GlobalButtonType): JSX.Element {

    let btnColor = "";

    if (theme === 'default') {
        if (isChipSelected === undefined) btnColor = 'text-primary bg-white border border-white ' + (hovered ? 'hover:text-white hover:bg-primary' : '');
        else btnColor = 'border border-white hover:text-primary hover:bg-white ' + (isChipSelected ? 'text-primary bg-white ' : 'text-white bg-primary ') + 'justify-center h-10 text-xs lg:text-sm rounded-full';
    }
    else if (theme === 'primary') {
        if (isChipSelected === undefined) btnColor = 'text-white bg-primary border border-primary ' + (hovered ? 'hover:text-primary hover:bg-white' : '');
        else btnColor = 'border border-primary hover:text-white hover:bg-primary ' + (isChipSelected ? 'text-white bg-primary ' : 'text-primary bg-white ') + 'justify-center h-10 text-xs lg:text-sm rounded-full';
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