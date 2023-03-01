import { Box, Typography, useTheme } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
    const { palette: { neutral }} = useTheme();


    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography 
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                        color={shades.secondary[500]}
                    >
                        ECOMMER
                    </Typography>
                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur reprehenderit veritatis pariatur. Asperiores velit nesciunt illo alias autem aliquid dolore molestias consectetur, excepturi optio atque labore animi, dignissimos nemo ipsa.
                        Molestiae cupiditate architecto aut illum! Fugiat aliquid odio incidunt provident neque exercitationem ex vitae, nulla repellat animi repellendus sint dolorem libero! Aperiam facilis eveniet molestiae reiciendis suscipit ratione, veniam rem?
                    </div>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        About Us
                    </Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Terms and Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Customer Care
                    </Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                    <Typography mb="30px">Returns and Refunds</Typography>
                </Box>

                <Box width="clamp(20%, 25%, 30%)">
                <Typography variant="h4" fontWeight="bold" mb="30px">
                        Contact Us
                    </Typography>
                    <Typography mb="30px">50 North </Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer