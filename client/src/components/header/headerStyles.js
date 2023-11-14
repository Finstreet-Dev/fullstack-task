const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({
    headerContainer: {
        width:"100%",
        display: "flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"0 2.5em",
        background:"black"
    },
    menuSection: {
        cursor:"pointer"
    }

});