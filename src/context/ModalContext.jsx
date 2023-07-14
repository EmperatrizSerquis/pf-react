import { useState, useEffect, createContext  } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {
  
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      let timeoutId;
        const showModal = () => {
          clearTimeout(timeoutId);
          timeoutId =
           setTimeout(() => {
            setShowModal(true);
          }, 20000); 
        };
    
        window.addEventListener('mousemove', showModal);
        window.addEventListener('keydown', showModal);
    
        return () => {
            window.removeEventListener('mousemove', showModal);
            window.removeEventListener('keydown', showModal);
            clearTimeout(timeoutId);
            
          };
        }, []);


        return (
            <ModalContext.Provider value={{ showModal, setShowModal}}>
                 {children}
            </ModalContext.Provider>
        )
} 


  