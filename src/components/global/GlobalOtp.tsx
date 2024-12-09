import { useState } from "react";


type GlobalOtpType = {
    length: number;
    onChange: (value: string) => void;
    className?: string;
}


export default function GlobalOtp({
    length,
    onChange,
    className
}: GlobalOtpType): JSX.Element {
    const [value, setValue] = useState<string[]>(Array(length).fill(""));

    const handleChange = (value_: string, index: number) => {
        const updatedOtp = [...value];
        updatedOtp[index] = value_.slice(-1);
        setValue(updatedOtp);
        onChange(updatedOtp.join(""));
        if (value_ && index < length - 1) {
            const nextInput = document.getElementById(`value-input-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !value[index] && index > 0) {
            const prevInput = document.getElementById(`value-input-${index - 1}`);
            prevInput?.focus();
        }
    };

    return (
        <div
            className="flex items-center justify-center gap-1 lg:gap-2"
        >

            {value.map((_, index) => (
                <input
                    key={index}
                    id={`value-input-${index}`}
                    type="text"
                    maxLength={1}
                    value={value[index]}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-center text-xs sm:text-sm lg:text-base bg-secondary text-black font-semibold border-2 border-primary outline-none self-start p-0.5 sm:p-1 lg:p-1.5 rounded-md ` + className}
                />
            ))}

        </div>
    )
}