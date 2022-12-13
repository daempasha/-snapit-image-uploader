import Card from "components/Card/card.component";
import { useStore } from "store";
import { FaCheckCircle, FaCopy } from "react-icons/fa"
import toast from "react-hot-toast";

const Uploaded = () => {
    const apiResponse = useStore((store) => store.apiResponse)

    const copyToClipboard = async () => {
        if (apiResponse && apiResponse.url) {
            toast.success("Copied to clipboard")
            return await navigator.clipboard.writeText(apiResponse.url).then();
        }
    }
    return (
        <Card>
            <div className="flex justify-center text-green-600">
                <FaCheckCircle size={48} />

            </div>
            <h1 className="text-center font-medium text-xl my-5">Uploaded successfully!</h1>
            <img className="object-contain w-[500px] rounded-md" src={apiResponse?.url} alt="uploaded" />
            <div className="border-2 bg-gray-200 border-gray-300 rounded-md flex mt-5">
                <input className="bg-gray-200 flex-1 py-1 px-2" value={apiResponse?.url || "https://unknown.com"} readOnly />
                <button onClick={copyToClipboard} className="bg-blue-600 transition-colors hover:bg-blue-400 p-2 rounded-md rounded-l-none  text-white"><FaCopy /></button>
            </div>
        </Card>
    )
}

export default Uploaded;