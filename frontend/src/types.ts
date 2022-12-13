
export interface Store {
    state: ApplicationState
    setState: (newState: ApplicationState) => void
    apiResponse?: ApiResponse;
    setApiResponse: (apiResponse: ApiResponse) => void;
    fileToUpload?: File;
    setFileToUpload: (fileToUpload: File | undefined) => void
}

export interface ApiResponse {
    message: string;
    url?: string;
}

export type ApplicationState = "upload" | "uploading" | "uploaded"