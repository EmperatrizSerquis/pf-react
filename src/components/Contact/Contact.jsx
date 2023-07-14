import InfoContainer from '../InfoContainer/InfoContainer'
import TitleContainer from '../TitleContainer/TitleContainer'
import Fancy from "../Fancy/Fancy"
import Button from "../Button/Button"



const Contact = () => {

    return (
       
        <div>
           <Fancy />
            <TitleContainer>
                <h2 className="text-primary">Send us an email</h2>
                
            </TitleContainer> 
            <InfoContainer>
                Keep in Touch
                <p>mail@mail.com</p>
            </InfoContainer> 
            
            <Button/>
            
        </div>
    )
}

export default Contact