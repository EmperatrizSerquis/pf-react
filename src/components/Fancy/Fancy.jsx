import lightLogo from '/light.svg'
import blackLogo from '/light-black.svg'
import { Link } from "react-router-dom"


const Fancy = () => {
    
    return (
        <section>
            <div className="center">
                <Link to={`/products`} target="_blank">
                    <img src={lightLogo} className="logo" alt="Light logo Shop" />
                </Link>
                <Link to={`/`} target="_blank">
                    <img src={blackLogo} className="logo light" alt="Black logo Home" />
                </Link>
            
                <h1>LED LIGHTS FOR LIFE</h1>
            
                <p className="read-the-docs">
                    Look to our Products
                </p>
            </div>
        </section>
    )
}

export default Fancy