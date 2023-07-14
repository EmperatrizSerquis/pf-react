import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import blackLogo from '/light-black.svg';
import freeShipping from '/icons8-shipping-80.png';
import safePayment from '/icons8-card-payment-80.png';
import support from '/icons8-support-80.png';

const ServicesListContainer = () => {

    return (
        <div className="services">

            <Card variant="outlined" className="bg-primary" >
                <Grid container spacing={12}  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="services__container">
                    <Grid item xs={4}  className="services__product__item">
                        <Box sx={{ p: 2, display: 'flex' }}><img src={freeShipping} className="services__product__image" alt="Light logo" /><h3 className="services__title">Free Shipping</h3> </Box>
                    </Grid>
                    <Grid item xs={4}  className="services__product__item">
                        <Box sx={{ p: 2, display: 'flex' }}><img src={safePayment} className="services__product__image" alt="Light logo" /> <h3 className="services__title">Safe Payment</h3> </Box>
                    </Grid>
                    <Grid item xs={4}  className="services__product__item">
                        <Box sx={{ p: 2, display: 'flex' }}><img src={support} className="services__product__image" alt="Light logo" /> <h3 className="services__title">24/7 Support</h3> </Box>
                    </Grid>
                
                </Grid>
            </Card>

        </div>
    )
}

export default ServicesListContainer