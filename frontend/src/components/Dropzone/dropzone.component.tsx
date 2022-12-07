import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { IoMdImage } from "react-icons/io"
import ImageIcon from "icons/image.svg"

const Dropzone = () => {
    const onDrop = useCallback((acceptedFiles: any) => {
        // Do something with the files
    }, [])
    const { getRootProps, getInputProps, isDragActive, acceptedFiles, open, } = useDropzone({ onDrop })

    return (
        <>
            <div className="text-center m-5 px-20 py-10 border-2 border-dashed rounded-md bg-[#F6F8FB] border-[#A3C5F5]" {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="flex justify-center text-gray-300 mb-5">
                    <img src={ImageIcon} alt="Icon of mountains" />
                </div>
                <p className="text-gray-400 text-sm">Drag & Drop your images here</p>
            </div>
            <p className="text-gray-400 text-center my-5 text-xs">Or</p>
            <div className="flex items-center justify-center">
                <button onClick={open} className="rounded-lg bg-blue-500 hover:bg-blue-400 transition-all text-white px-3 py-2 text-sm">
                    Choose a file
                </button>
            </div>
        </>

    )
}

export default Dropzone;