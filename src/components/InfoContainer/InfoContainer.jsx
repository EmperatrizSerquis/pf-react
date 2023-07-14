const InfoContainer = ( {children} ) => {
    const styles = {
        backgroundColor: 'white',
        color: 'black',
        maxWidth: '90%',
        margin: '0 auto',
        textAlign: 'center',
        padding: '50px',
        fontSize: '25px'
    }

    return (
        <div style={styles}>
            {children}
        </div>
    )
}

export default InfoContainer