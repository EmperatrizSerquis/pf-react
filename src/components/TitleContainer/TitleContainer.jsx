const InfoContainer = ( {children} ) => {
    const styles = {
        backgroundColor: 'pink',
        color: 'white',
        maxWidth: '60%',
        margin: '20px auto',
        textAlign: 'center',
        lineHeigh: '2em'
    }

    return (
        <div style={styles}>
            <h3>Know more</h3>
            {children}
        </div>
    )
}

export default InfoContainer