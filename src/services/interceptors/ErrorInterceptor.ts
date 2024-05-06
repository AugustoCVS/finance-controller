import { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {
    
    if(error.message === "Network Error") {
        return Promise.reject(new Error("Sem conexão com a internet"));
    }
}