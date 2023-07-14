import React, {useState, useEffect} from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom"

const Users = () => {
    const [name, setName] = useState('')
    const [token, setToken] = useState('')
    const [expire, setExpire] = useState('')
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        refreshToken()
        getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const refreshToken = async() => {
        try {
            const response = await axios.get('http://localhost:5000/token')
            setToken(response.data.accessToken)
            const decoded = jwt_decode(response.data.accessToken)
            setName(decoded.name)
            setExpire(decoded.exp)
        } catch (error) {
            if(error.response){
                navigate('/')
            }
        }
    }

    const axiosJwt = axios.create()

    axiosJwt.interceptors.request.use(async(config) => {
        const currentDate = new Date()
        if(expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token')
            config.headers.Authorization = `Bearer ${response.data.accessToken}`
            setToken(response.data.accessToken)
            const decoded = jwt_decode(response.data.accessToken)
            setName(decoded.name)
            setExpire(decoded.exp)
        }
        return config
    }, (error) => {
        return Promise.reject(error)
    })

    const getUsers = async() => {
        const response = await axiosJwt.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setUsers(response.data);
    }
  return (
    <div className='container mt-5'>
        <h1>Welcome Back : {name} </h1>
        <button onClick={getUsers} className='button is-info'>Get Users</button>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((users, index) => (
                    <tr key={users.id}>
                    <td>{index + 1}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default Users