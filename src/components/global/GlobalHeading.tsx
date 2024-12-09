type GlobalHeadingType = {
    text: string;
    className?: string;
    size?: 'default' | 'medium';
}


export default function GlobalHeading({
    text,
    className,
    size = 'default'
}: GlobalHeadingType): JSX.Element {

    let fontSize = "";

    if (size === 'default') {
        fontSize = 'text-3xl sm:text-4xl md:text-5xl';
    }
    else if (size === 'medium') {
        fontSize = 'text-2xl sm:text-3xl md:text-4xl';
    }

    return (
        <p
            className={`${fontSize} text-primary font-semibold tracking-wide leading-10 hover:animate-pulse ` + className}
        >
            {text}
        </p>
    )
}