import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const Admin = () => {
    const { login, googleLogin } = useContext(AuthContext)

    const [values, setValues] = useState({
        name: '',
        code: '',
        description: '',
        brand: '',
        price: '',
        img: '',
        category: '',
        stock: '',
        power: '',
        tone: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }

    return (
        <div className='container'>
            <div className="b-background"> 
            
              
            <div className='my-form'>
                <h2>Login</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input 
                        value={values.email}
                        onChange={handleInputChange}
                        type='email' 
                        placeholder='Email'
                        className='form-control my-2'
                        name='email'
                    />
                    <input 
                        value={values.password}
                        onChange={handleInputChange}
                        type='password' 
                        placeholder='Password'
                        className='form-control my-2'
                        name='password'
                    />

                    <button className='btn btn-primary' type='submit'>Submit</button>
                    <Link to="/register">Register</Link>
                </form>
                <button className='btn btn-primary' onClick={googleLogin}>Register with Google</button>
            </div>
            </div>
        </div>
    )
}

export default Admin