import axios from 'axios';

import '../api/api_url'
import { api_url } from '../api/api_url';

const loginUser = (usr, pw) => {
    // axios.get(api_url)
    return {Username: usr, Password: pw}
}
const logoutUser = () => "logout method";
const currentUser = () => "currentUser";

export const LoginService = {
    loginUser,
    logoutUser,
    currentUser
}