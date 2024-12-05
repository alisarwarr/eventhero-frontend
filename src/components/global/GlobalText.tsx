type GlobalTextType = {
    text: string;
    className?: string;
}


export default function GlobalText({
    text,
    className
}: GlobalTextType): JSX.Element {
    return (
        <p
            className={`text-xs sm:text-sm lg:text-base text-primary font-semibold tracking-wide w-full ` + className}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    )
}