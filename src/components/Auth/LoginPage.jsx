import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link, Navigate } from 'react-router-dom'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const LoginPage = () => {
    const { login, googleLogin, user } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState(false)


    const [errorMessage, setErrorMessage] = useState(null)


    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
       
        if (values.email.length === 0) {
            alert("Your Email is required")
            return
        }
        if (values.password.length < 6) {
            alert("Your Password must have at least 6 characters")
            return
        }

        try {
            await login(values)

        } catch (error) {

            setError(true);
            setErrorMessage('Something was wrong. Go to Register Page if you are not registered yet.')
            setTimeout(() => {
                setErrorMessage(null) 
            }, 6000)

            return
        }

        
    }

    if (user.logged) {
        return <Navigate to="/"/>
    }

    return (
        <div className='container'>
            <div className="b-background"> 
                <div className="promo-info">
                <h3> GET MORE DISCOUNTS BY BEING A MEMBER</h3> 
                </div>
                <div className="promo-checkout">
                <h3> You NEED to LOGIN NOW</h3> 
                </div>
                  
                <div className='my-form'>
                    <h2>Login</h2>
                    <hr/>

                <form onSubmit={handleSubmit}>
                    <input 
                        value={values.email}
                        onChange={handleInputChange}
                        type='email' 
                        placeholder='Email'
                        name='email'
                    />
                    <input 
                        value={values.password}
                        onChange={handleInputChange}
                        type='password' 
                        placeholder='Password'
                        name='password'
                    />
                    { error && errorMessage}

                    {/* {user.logged && <p className="success">WELCOME <b> {values.name}</b>. 
                    </p>
                    } */}
                  
                    
                    
                    <button className='btn' type='submit'>Submit</button>
                    
                </form>
                
                     
                <div className="log-links">
                 <button className='btn mt-20' onClick={googleLogin}>Login with Google</button>
                <div className="link-register">
                    <Link  to="/register"> Or Go to Register <ArrowOutwardIcon /> </Link>
                    
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LoginPage