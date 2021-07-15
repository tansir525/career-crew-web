import axios from "axios";

const login = (username, password) => {
    return axios
        .post("http://127.0.0.1:8000/api/auth/", {
            username,
            password,
        })
        .then((response) => {
            if (response.data) {
                localStorage.setItem("userToken", JSON.stringify(response.data.token));
                localStorage.setItem("userTypeStudent", JSON.stringify(response.data.is_student));
                localStorage.setItem("userTypeTeacher", JSON.stringify(response.data.is_teacher));
                localStorage.setItem("userTypeAdmin", JSON.stringify(response.data.is_admin));
                localStorage.setItem("userId", JSON.stringify(response.data.user_id));
                return response.data;
            }
        })
};

const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userTypeStudent");
    localStorage.removeItem("userTypeTeacher");
    localStorage.removeItem("userId");
};

const isLogedin = () => {
    return JSON.parse(localStorage.getItem("userToken"));
};

const isStudent = () => {
    return JSON.parse(localStorage.getItem("userTypeStudent"));
};

const isTeacher = () => {
    return JSON.parse(localStorage.getItem("userTypeTeacher"));
};

const isAdmin = () => {
    return JSON.parse(localStorage.getItem("userTypeAdmin"));
};

const getUserId = () => {
    return JSON.parse(localStorage.getItem("userId"))
}




export default {

    login,
    logout,
    isLogedin,
    isStudent,
    isTeacher,
    getUserId,
    isAdmin
};