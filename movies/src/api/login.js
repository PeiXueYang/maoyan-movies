import axios from 'axios'
export const login = (data)=>{
    return axios ('/api/client/user/login',{
        method:"POST",
        data
    }).then(res =>{
        return res.data
    })
}