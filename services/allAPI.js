import { serverUrl } from "./baseUrl"
import { commonApi } from "./commonAPI"

commonApi

//register
export const registerApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody,"")
}

//login
export const loginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}

//add form
export const addFormApi = async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/addform`,reqBody,reqHeader)
}