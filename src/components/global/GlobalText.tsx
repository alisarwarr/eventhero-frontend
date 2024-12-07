type GlobalTextType = {
    text: string;
    className?: string;
    size?: 'default' | 'medium';
}


export default function GlobalText({
    text,
    className,
    size = 'default'
}: GlobalTextType): JSX.Element {

    let fontSize = "";

    if (size === 'default') fontSize = 'text-xs sm:text-sm lg:text-base';
    else if (size === 'medium') fontSize = 'text-xs lg:text-sm';

    return (
        <p
            className={`${fontSize} text-primary font-semibold tracking-wide w-full ` + className}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    )
}