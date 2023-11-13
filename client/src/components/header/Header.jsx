import React, { useState } from "react";
import { useStyles } from "./headerStyles.js"
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import Logo from "../../assets/logo.png"
import { Box } from "@mui/material";
import MenuModal from "../menu-modal/MenuModal.jsx";

const Header = () => {
    const classes = useStyles()
    const [openMenuModal, setOpenMenuModal] = useState(false);
    const handleOpenMenuModal = () => setOpenMenuModal(true);
    const handleCloseMenuModal = () => setOpenMenuModal(false);

    return (
        <>
            {
                openMenuModal && <MenuModal handleCloseMenuModal={handleCloseMenuModal} handleOpenMenuModal={handleOpenMenuModal} />
            }
            
            <Box className={classes.headerContainer} component="section">
                <Box className={classes.MenuIcon} component="article"><MenuIcon onClick={handleOpenMenuModal} sx={{ fontSize: "35px", cursor: "pointer", color: "#FFFFFF" }} /></Box>
                <img style={{ objectFit: "cover", height: "80px" }} src={Logo} alt="Logo_Image" />
                <Box className={classes.languageSection} component="article"><LanguageIcon sx={{ fontSize: "35px", color: "#FFFFFF" }} /></Box>
            </Box>

        </>
    )
}

export default Header;