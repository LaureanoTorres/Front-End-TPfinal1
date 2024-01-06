import { useNavigate } from "react-router-dom"


export const verifyToken = ()=>{
    const navigate = useNavigate()
    fetch(URL_API + '/auth/verify',{
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('auth-token-app')
        }
    }).then(res => res.json())
    .then(data =>{
        if(data.status ==200){
            navigate('/home')
        }
    })
}