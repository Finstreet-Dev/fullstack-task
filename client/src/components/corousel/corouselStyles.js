const { makeStyles } = require("@material-ui/styles")

export const useStyles = makeStyles({
    corouselContainer: {
        height: "100%",
        position: "relative"
    },
    corouselImageDesc: {
        position: "absolute",
        bottom: 15,
        left: 35,
        padding: 20,
        width: '40%',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px"
    }
});