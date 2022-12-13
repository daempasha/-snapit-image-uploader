import { useEffect } from "react";
import Card from "components/Card/card.component";
import { useStore } from "store";
import { postImage } from "queries"
import toast from "react-hot-toast";

const Uploading = () => {
    const fileToUpload = useStore((store) => store.fileToUpload)
    const setFileToUpload = useStore((store) => store.setFileToUpload)
    const setState = useStore((store) => store.setState)
    const setApiResponse = useStore(store => store.setApiResponse)

    useEffect(() => {
        if (fileToUpload) {
            const formData = new FormData();
            formData.append("image", fileToUpload)
            postImage(formData)
                .then(response => {
                    setApiResponse(response.data)
                    setState("uploaded")
                })
                .catch(error => {
                    toast.error("Could not upload your image, please try again.")
                    setApiResponse(error)
                    setState("upload")
                })
        }
    }, [fileToUpload, setFileToUpload, setApiResponse, setState])
    return (<Card>
        <h1 className="text-left font-medium text-xl mb-5">Uploading...</h1>
        <div className="w-80 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 overflow-hidden">
            <div className="relative animate-progress bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 w-24"></div>
        </div>
    </Card>)
}

export default Uploading;