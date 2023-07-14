import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import blackLogo from '/light-black.svg';


const TestimonialsContainer = ( { producto } ) => {

    return (
        <div className="services">
            <h2 className="services__title">Testimonials </h2>
            <Card variant="outlined">
                <Grid container spacing={12}  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="services__container">
                    <Grid item xs={4}  className="services__product__item">
                        <Box sx={{ p: 2, display: 'flex' }}><h3>Saul Goodman</h3> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quidem repudiandae voluptatum accusantium voluptas corrupti esse quaerat dignissimos voluptate deserunt. Provident, numquam quaerat. Aliquid, laborum ipsam quo eveniet dignissimos sunt.</p></Box>
                    </Grid>
                    <Grid item xs={4}  className="services__product__item">
                        <Box sx={{ p: 2, display: 'flex' }}><h3>Jessie Pinkman</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quidem repudiandae voluptatum accusantium voluptas corrupti esse quaerat dignissimos voluptate deserunt. Provident, numquam quaerat. Aliquid, laborum ipsam quo eveniet dignissimos sunt.</p></Box>
                    </Grid>
                    <Grid item xs={4} className="services__product__item">
                        <Box sx={{ p: 2, display: 'flex' }}><h3 > Walter White</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quidem repudiandae voluptatum accusantium voluptas corrupti esse quaerat dignissimos voluptate deserunt. Provident, numquam quaerat. Aliquid, laborum ipsam quo eveniet dignissimos sunt.</p></Box>
                    </Grid>
                
                </Grid>
            </Card>

        </div>
    )
}

export default TestimonialsContainer