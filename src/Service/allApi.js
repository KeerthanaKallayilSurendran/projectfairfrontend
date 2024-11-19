import commonApi from "./commonApi"
import SERVER_URL from "./serverUrl"

// registerAPI called by Auth
export const registerAPI = async (reqBody) => {
    return await commonApi("POST", `${SERVER_URL}/register`, reqBody)
}
export const loginAPI = async (reqBody) => {
    return await commonApi("POST", `${SERVER_URL}/login`, reqBody)
}

export const addProjectAPI = async (reqBody, reqHeader) => {
    return await commonApi("POST", `${SERVER_URL}/add-project`, reqBody, reqHeader)
}


export const getHomeProjectAPI = async () => {
    return await commonApi("GET", `${SERVER_URL}/home-project`, {})
}

export const allProjectAPI = async (searchKey, reqHeader) => {
    return await commonApi("GET", `${SERVER_URL}/all-project?search=${searchKey}`, {}, reqHeader)
}

export const userProjectAPI = async (reqHeader) => {
    return await commonApi("GET", `${SERVER_URL}/user-project`, {}, reqHeader)
}