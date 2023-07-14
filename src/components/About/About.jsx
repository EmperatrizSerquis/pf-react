import InfoContainer from '../InfoContainer/InfoContainer'
import TitleContainer from '../TitleContainer/TitleContainer'
import Fancy from "../Fancy/Fancy"
import Button from "../Button/Button"

import { useState, useEffect } from "react"


const About = () => {

    const [timedPopup,setTimedPopup ] = useState(false)



    const openPromo = (e) => {
        console.log(e)
    }

    useEffect(() => {
        const handleScroll = event => {
          setScrollTop(window.scrollY);
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    useEffect(() => {

        setTimeout(() => {
            setTimedPopup(true)
        }, 3000)

        window.addEventListener('click', openPromo)

        return () => {
            window.removeEventListener('click', openPromo)
        }
    }, [])

    return (
       
        <div>
           <Fancy />
            <TitleContainer>
                <h2 className="text-primary">About Us</h2>
            </TitleContainer> 
            <InfoContainer>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maiores eveniet incidunt possimus ut veritatis officiis, facilis libero sunt nulla dicta sequi quo quaerat eius accusantium quam. Esse, saepe iure!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maiores eveniet incidunt possimus ut veritatis officiis, facilis libero sunt nulla dicta sequi quo quaerat eius accusantium quam. Esse, saepe iure!
                
            </InfoContainer>  

            <Button/>
                

            {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                <h3></h3>
            </Popup> */}
        </div>
    )
}

export default About