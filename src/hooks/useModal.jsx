import { useEffect, useState } from "react"

const useModal = () => {

    const [showModal, setShowModal] = useState(false);

useEffect(() => {
  let timeoutId;
    const showModal = () => {
      clearTimeout(timeoutId);
      timeoutId =
       setTimeout(() => {
        setShowModal(true);
      }, 12000); 
    };

    window.addEventListener('mousemove', showModal);
    window.addEventListener('keydown', showModal);

    return () => {
        window.removeEventListener('mousemove', showModal);
        window.removeEventListener('keydown', showModal);
        clearTimeout(timeoutId);
        
      };
    }, [])
    return showModal
}
export default useModal