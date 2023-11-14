import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Box, Button, Typography } from '@mui/material';
import { useStyles } from "./corouselStyles.js"

const CarouselComponent = () => {
    const classes = useStyles()

    const images = [{
        title: "Bugatti Veyron",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        src: "Bugatti-1.jpg",
    },
    {
        title: "Bugatti Chiron",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        src: "Bugatti-2.jpg",
    },
    {
        title: "Bugatti Type 57",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        src: "Bugatti-3.jpg",
    },
    {
        title: "Bugatti Divo",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        src: "Bugatti-4.jpg",
    },
    {
        title: "Bugatti EB 110",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        src: "Bugatti-5.jpg",
    }, {
        title: "Bugatti Veyron",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        src: "Bugatti-6.jpg",
    },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
    };

    return (
        <Box component="section" className={classes.corouselContainer}>
            <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} selectedItem={currentIndex}>
                {images?.map((image, index) => (
                    <section key={index} style={{ height: "90vh", position: "relative" }}>
                        <img src={require(`../../assets/${image?.src}`)} alt={`Slider Image`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                        {/* Description */}
                        <Box component="section" className={classes.corouselImageDesc}>
                            <Typography variant="h5" color="white" gutterBottom>
                                {image?.title?.toUpperCase()}
                            </Typography>
                            <Typography variant="body2" color="white" paragraph sx={{ textAlign: 'justify' }}>
                                {image?.description}
                            </Typography>
                            <Button
                                variant="outlined"
                                sx={{ color: "white", textTransform: "none", border: "1px solid white" }}
                            >
                                Discover More
                            </Button>
                        </Box>
                    </section>
                ))}
            </Carousel>

            {/* Next Button */}
            <Button
                sx={{ position: "absolute", bottom: 25, right: 40, zIndex: 1, color: "white" }}
                // variant="contained"
                color="primary"
                onClick={handleNextClick}
            >
                Next
            </Button>
        </Box>
    );
};

export default CarouselComponent;
