import React, { useState } from 'react';
import { useStyles } from "./menuModalStyles";
import { Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const MenuModal = ({ handleCloseMenuModal, handleOpenMenuModal }) => {
    const classes = useStyles();

    const menuData = {
        "MODELS": ["CHIRON", "ONE OFF", "VEYRON"],
        "BRAND": ["HISTORY", "MOLSHEM"],
        "OWNERSHIP": ["CUSTOMER SERVICE", "ACCESSORIES"],
        "LIFE STYLES":[],
        "COMPANY": ["CAREER", "CONTACT", "NEWS"],
    };

    const [hoveredMenuItem, setHoveredMenuItem] = useState(null);

    return (
        <>
            <Modal
                open={handleOpenMenuModal}
                onClose={handleCloseMenuModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper>
                    <Box className={classes.modalContainer} component="section">
                        <CloseIcon sx={{ color: "white", fontSize: "35px", cursor: "pointer" }} onClick={handleCloseMenuModal} />
                        <Box className={classes.modalContainerMenu} component="section">
                            {Object.keys(menuData).map((item, index) => (
                                <Box
                                    key={index}
                                    className={classes.modalContainerMenuItem}
                                    onMouseEnter={() => setHoveredMenuItem(item)}
                                    onMouseLeave={() => setHoveredMenuItem(null)}
                                    component="article"
                                >
                                    {item}

                                    {hoveredMenuItem === item && (
                                        <Box sx={{display:"flex", alignItems:"center"}} component="article">
                                            {menuData[item].map((info, infoIndex) => (
                                                <Typography sx={{paddingLeft:"1em", fontSize:"12px"}} key={infoIndex} >{info}</Typography>
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Paper>
            </Modal>
        </>
    );
};

export default MenuModal;
