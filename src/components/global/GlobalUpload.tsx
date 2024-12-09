import { useState, useRef } from "react";
import GlobalButton from "./GlobalButton";


type GlobalUploadType = {
    onUpload: (file: File) => void;
}


export default function GlobalUpload({
    onUpload
}: GlobalUploadType): JSX.Element {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            onUpload(selectedFile);
            setSelectedFile(null);
            return;
        }
        alert("Please select a file before uploading.");
    };

    return (
        <>
            <button
                className="border-2 border-primary outline-none self-start px-3.5 sm:px-5 lg:px-7 py-7 sm:py-9 lg:py-12 rounded-md w-full"
                onClick={() => fileInputRef.current?.click()}
            >
                <label
                    htmlFor="file-upload"
                    className="text-xs text-primary lg:text-sm font-semibold tracking-wide cursor-pointer"
                >
                    {selectedFile ? selectedFile.name : 'Document Uploader'}
                </label>
                <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt"
                    className="hidden"
                    ref={fileInputRef}
                />
            </button>
            <GlobalButton
                text="Upload"
                onClick={handleUpload}
                theme="primary"
                className="mx-auto !my-5"
            />
        </>
    )
}