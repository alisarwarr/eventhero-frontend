import GlobalText from "./GlobalText";


type GlobalImageCardType = {
    imageSrc: string;
    title: string;
    desciption: string;
}


export default function GlobalImageCard({
    imageSrc,
    title,
    desciption
}: GlobalImageCardType): JSX.Element {
    return (
        <div
            className="border-2 border-primary p-1.5 rounded-md cursor-pointer hover:animate-pulse"
        >

            <img
                src={imageSrc}
                alt="imageSrc"
                className="w-full h-44 sm:h-48 lg:h-60 rounded-md"
            />

            <div
                className="space-y-0 sm:space-y-1 pt-1.5 sm:pt-2 lg:pt-3.5 pb-0 sm:pb-0.5 lg:pb-1.5"
            >

                <GlobalText
                    text={title}
                    className="text-center"
                />

                <GlobalText
                    text={desciption}
                    className="text-center !text-black"
                />

            </div>

        </div>
    )
}