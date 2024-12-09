type GlobalButtonType = {
    text: string;
    icon?: JSX.Element;
    onClick: () => void;
    className?: string;
    theme?: 'default' | 'primary',
    hovered?: boolean;
    isChipSelected?: boolean;
    size?: 'default' | 'medium';
}


export default function GlobalButton({
    text,
    icon,
    onClick,
    className,
    theme = 'default',
    hovered = false,
    isChipSelected,
    size = 'default'
}: GlobalButtonType): JSX.Element {

    let btnColor = "";

    if (theme === 'default') {
        if (isChipSelected === undefined) btnColor = 'text-primary bg-white border border-primary ' + (hovered ? 'hover:text-white hover:bg-primary' : '');
        else btnColor = 'border-2 border-white hover:text-primary hover:bg-white ' + (isChipSelected ? 'text-primary bg-white ' : 'text-white bg-primary ') + 'justify-center h-10 text-xs lg:text-sm !rounded-xl';
    }
    else if (theme === 'primary') {
        if (isChipSelected === undefined) btnColor = 'text-white bg-primary border border-primary ' + (hovered ? 'hover:text-primary hover:bg-white' : '');
        else btnColor = 'border border-primary hover:text-white hover:bg-primary ' + (isChipSelected ? 'text-white bg-primary ' : 'text-primary bg-white ') + 'justify-center h-10 text-xs lg:text-sm !rounded-xl';
    }

    let fontSize = "";

    if (size === 'default') {
        fontSize = 'text-xs sm:text-sm lg:text-base';
    }
    else if (size === 'medium') {
        fontSize = 'text-xs lg:text-sm';
    }

    return (
        <button
            onClick={onClick}
            className={`${fontSize} ${btnColor} font-semibold tracking-wide py-1.5 px-5 lg:px-10 rounded-md flex items-center gap-1 lg:gap-2 ` + className}
        >
            {text}
            {icon}
        </button>
    )
}