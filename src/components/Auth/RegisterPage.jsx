import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link, Navigate } from 'react-router-dom'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const RegisterPage = () => {

    const { register, googleLogin, user } = useContext(AuthContext)

    const [errorMessage, setErrorMessage] = useState(false)

    const [errorMail, setErrorMail] = useState(false);
    const [errorPass, setErrorPass] = useState(false);

    const validateEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(values.email)) {
          setErrorMail('Please enter a valid email address');         
        } else {
          setErrorMail(false);
          if(values.email === '') {
            setErrorMail('You need to enter an email');
          }
        }

      }
 
      const validatePass = () => {
        
        if (values.password < 6) {
          setErrorPass('Please enter a Password with at least 6 characters');
          
        } else {
          setErrorPass(false);
        }
      }
    

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage(false)
        validateEmail();
        validatePass();


        if(errorMail == false && errorPass == false) {
            try {
                await register(values) 
                 
             } catch (error) {
                 
                 setErrorMessage(true)
             } 
        }
        
    }

    if (user.logged) {
        return <Navigate to="/"/>
    }

    return (
        <div className='container'>
        <div className="b-background"> 
            <div className="promo-info">
            <h3> GET MORE BENEFITS LIKE DISCOUNTS, FREE SHIPPING AND MORE.</h3> 
            </div>
            <div className="promo-checkout">
            <h3> REGISTER NOW  AND</h3> 
            <h3> THANK YOU </h3> 
            <h3> FOR SHOPPING WITH US! </h3>
            </div>
              
            <div className='my-form'>
                <h2>Register</h2>
                <hr/>

            <form onSubmit={handleSubmit}>

                <input 
                    value={values.email}
                    onChange={handleInputChange}
                    type='email' 
                    placeholder='Email'
                    name='email'
                    required
                />
                {errorMail && <p style={{color: 'red'}}>{errorMail}</p>}
                <input 
                    value={values.password}
                    onChange={handleInputChange}
                    type='password' 
                    placeholder='Password'
                    name='password'
                    required
                />
                {errorPass && <p style={{color: 'red'}}>{errorPass}</p>}
                {user.logged && <p className="success">WELCOME <b> </b>. </p>}

                {errorMessage && <p className="error">Something was wrong. Password must contain at least 6 characters and you should not be previousy registered</p>}

                <button className='btn' type='submit'>Submit</button>
                
            </form>
            <div className="log-links">
             <button className='btn mt-20' onClick={googleLogin}>Login with Google</button>
            <div className="link-register">
                <Link  to="/login"> Are you Registered? Go to Login Now <ArrowOutwardIcon /> </Link>
                
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default RegisterPage