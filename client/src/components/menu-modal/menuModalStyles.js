const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({
    modalContainer: {
        position: "absolute",
        padding: "1.5em 2.5em",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        border: "none"
    },
    menuSection: {
        cursor: "pointer"
    },

    logoSection: {
    },

    languageSection: {
    },

    modalContainerMenu: {
        marginTop: "4em"
    },
    modalContainerMenuItem: {
        color: "white",
        marginTop: "1em",
        fontWeight: 800,
        fontSize: "27px",
        cursor: "pointer",
        display:"flex"
    }

});