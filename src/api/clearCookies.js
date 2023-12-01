import axios from "axios"


export const clearCookies = async () => {
    await axios.get('/clear');
}