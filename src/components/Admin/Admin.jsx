import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {  Link, Navigate } from 'react-router-dom'

const Admin = () => {
    const { isAdmin, user } = useContext(AuthContext)


    if (user.logged && isAdmin) {


    return (
        <div className='container' style={{fontWeight:700, color:'#9c27b0', minHeight:"300px"}}>
            <div className="b-background"> 
                <div className="promo text-center">
                <h3> You ARE THE BEST!</h3> 

                </div>
            </div>
            <div className="container">                
                <div className="promo-checkout mt-20">
                   
                    <h3> HELLO YOU!</h3> 
                    <h4>Admin Options</h4>

                    <br />
                    <Link to="/add" className="btn">Add Product</Link>

                    
                </div>
            </div>
        </div>
    ) } else {
        return <Navigate to="/"/>
    }

}

export default Admin