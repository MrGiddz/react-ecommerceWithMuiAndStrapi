import { Box, Alert, AlertTitle } from "@mui/material"

const Confirmation = () => {
    return <Box m="90px auto" width="80%" height="50vh">
        <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            You have successfully made an Order - {" "}
            <strong>Congrats on making your purchase, we will send details to track your purchase to your mail</strong>
        </Alert>
    </Box>
}

export default Confirmation