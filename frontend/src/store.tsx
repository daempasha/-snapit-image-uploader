import { Store } from 'types'
import create from 'zustand'


export const useStore = create<Store>((set) => ({
    state: "upload",
    setState: (newState) => set(() => ({ state: newState })),
    fileToUpload: undefined,
    setFileToUpload: (fileToUpload) => set(() => ({ fileToUpload })),
    apiResponse: undefined,
    setApiResponse: (apiResponse) => set(() => ({ apiResponse }))

}))