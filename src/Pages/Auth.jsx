import React, { useState } from 'react'
import login from '../assets/login.png'
import { FloatingLabel, Form, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../Service/allApi'

const Auth = ({ insideRegister }) => {

    
    const [isLoged, setIsLoged] = useState(false)
    const navigate = useNavigate()
    const [inputData, setInputData] = useState({
        username: "", email: "", password: ""
    })
    // console.log(inputData);

    const handleRegister = async (e) => {
        e.preventDefault()
        console.log("Inside Handle Register");
        if (inputData.username && inputData.email && inputData.password) {
            // alert("make api call")
            try {
                const result = await registerAPI(inputData)
                if (result.status == 200) {
                    alert(`Welcome ${result.data.username}, Please Login to explore our website`)
                    navigate('/login')
                    setInputData({ username: "", email: "", password: "" })
                } else {
                    if (result.response.status == 406) {
                        alert(result.response.data)
                        setInputData({ username: "", email: "", password: "" })
                    }
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Please fill the form")
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        if (inputData.email && inputData.password) {
            try {
                const result = await loginAPI(inputData)
                if (result.status == 200) {
                    sessionStorage.setItem("user", JSON.stringify(result.data.user))
                    sessionStorage.setItem("token", result.data.token)
                    setIsLoged(true)
                    setTimeout(() => {
                        setInputData({ username: "", email: "", password: "" })
                        navigate('/')
                        setIsLoged(false)
                    }, 2000)
                } else {
                    alert(result.response.data)
                }
            } catch (error) {
                console.log(error);

            }
        } else {
            alert("Please fill the form completly")
        }
    }


    return (
        <div style={{ minHeight: "100vh", width: '100%' }} className='d-flex justify-content-center align-items-center'>
            <div className="container w-75">
                <div className="shadow card p-2">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img className='img-fluid p-4' src={login} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h1><i className='fa-brands fa-docker'></i>
                                Project Fair</h1>
                            <h5>Sign {insideRegister ? "Up" : "In"} to Your Account</h5>
                            <Form className='pe-5'>
                                {
                                    insideRegister &&
                                    <FloatingLabel controlId="floatingInputName" label="Username" className="mb-3">
                                        <Form.Control value={inputData.username} onChange={e => setInputData({ ...inputData, username: e.target.value })} type="text" placeholder="Username" />
                                    </FloatingLabel>
                                }
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                    <Form.Control value={inputData.email} onChange={e => setInputData({ ...inputData, email: e.target.value })} type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control value={inputData.password} onChange={e => setInputData({ ...inputData, password: e.target.value })} type="password" placeholder="Password" />
                                </FloatingLabel>
                                {
                                    insideRegister ?
                                        <div className="mt-3">
                                            <button onClick={handleRegister} className='btn btn-primary mb-3'>Register</button>
                                            <p className='fs-5'>Already a user? Please click here to <Link to={'/login'}>Login</Link></p>
                                        </div>
                                        :
                                        <div className="mt-3">
                                            <button onClick={handleLogin} className='btn btn-primary mb-3 d-flex'>Login
                                                {isLoged && <Spinner className='ms-2' animation="border" variant="info" />}
                                            </button>
                                            <p className='fs-5'>New user? Please click here to <Link to={'/register'}>Register</Link></p>
                                        </div>
                                }
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth