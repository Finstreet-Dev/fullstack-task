import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Box } from '@mui/material';

const Corousel = () => {
    const images = ['Bugatti-1.jpg', 'Bugatti-2.jpg', 'Bugatti-3.jpg', 'Bugatti-4.jpg', 'Bugatti-5.jpg', 'Bugatti-6.jpg'];

    return (
        <Box component="section" sx={{ height: "100%" }}>
            <Carousel showArrows={true} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                {images.map((image, index) => (
                    <section key={index} style={{height:"90vh"}}>
                        <img src={require(`../../assets/${image}`)} alt={`Slider Image`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </section>
                ))}
            </Carousel>
        </Box>
    );
};

export default Corousel;
