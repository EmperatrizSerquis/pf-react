import React from 'react'
import pic from '/light.jpg'
import { Link } from 'react-router-dom'


const Modal = ( {open, modalClose} ) => {
    
    if(!open) return null

    return (
        <div onClick={modalClose} className='overlay'>
            <div className="modalContainer">
                <img src={pic} className="light" alt="Lighting Offers" />
                <div className="modalRight">
                    <p onClick={modalClose} className="closeBtn">x</p>
                    <div className="content">
                    <h3>ONE TIME OFFER DISCOUNT</h3>
                    <p>$500 </p>
                    <p>For your first Purchase</p>
                </div>
                <div className="btnContainer">
                    <button className="btn"><Link  to={"/register"}>Register and Get it NOW</Link></button>
                </div>
            </div>
        </div>    
    </div>
    )
}

export default Modal