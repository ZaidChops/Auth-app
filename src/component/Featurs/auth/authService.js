import axios from "axios";


const API_URL ='/api/user/'

const register = async (formData)=>{
    
    
    const responce = await axios.post(API_URL + "register" , formData)
    localStorage.setItem('user' , JSON.stringify(responce.data))
    return responce.data

}

const login =async (loginData)=>{
    const responce = await axios.post(API_URL+ "login", loginData)
    localStorage.setItem('user' , JSON.stringify(responce.data))
    return responce.data
}

const authService ={
    register,
    login
}

export default authService