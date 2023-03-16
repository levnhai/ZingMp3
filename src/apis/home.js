import axios from "~/ultis/request";

export const getHome  = () => new Promise(async(resolve, reject) => {
    try {
        const response = await axios({
            url :'/home',
            method:'get'
        })
        console.log(response);
    } catch (error) {
        reject(error)
    }
})
