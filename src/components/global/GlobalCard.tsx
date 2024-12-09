import { useState } from "react";
import GlobalText from "./GlobalText";


type GlobalCardType = {
    text: string;
    className?: string;
    hovered?: boolean;
    isSelected?: boolean;
}


export default function GlobalCard({
    text,
    className,
    hovered = false,
    isSelected
}: GlobalCardType): JSX.Element {

    const [onMouseOver, setOnMouseOver] = useState(false);

    const getColor = () => {
        let textColor = 'text-center';

        if (hovered) {
            if (onMouseOver) textColor += ' text-white';
            else textColor += ' text-primary';
        }
        else {
            if (onMouseOver) textColor += ' text-primary';
            else textColor += ' text-white';
        }
    
        let bgColor = 'border-2 border-primary';
    
        if (hovered) {
            if (onMouseOver) bgColor += ' bg-primary';
            else bgColor += ' bg-white';
        }
        else {
            if (onMouseOver) bgColor += ' bg-white border-primary';
            else bgColor += ' bg-primary border-white';
        }
        
        if(isSelected) {
            textColor += ' text-white';
            bgColor += ' bg-primary border-white';
        }

        return {
            textColor,
            bgColor
        }
    }

    return (
        <div
            className={`${getColor().bgColor} p-1.5 rounded-xl cursor-pointer w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 flex items-center ` + className}
            onMouseOver={() => setOnMouseOver(true)}
            onMouseOut={() => setOnMouseOver(false)}
        >

            <GlobalText
                text={text}
                className={getColor().textColor}
            />

        </div>
    )
}