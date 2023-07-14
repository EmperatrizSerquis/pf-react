

const MyButton = ({onClick, children}) => {
    
    return (
        <button className='my-button' onClick={onClick}>
            {children}
        </button>
    )
}

export default MyButton