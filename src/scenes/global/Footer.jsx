import { useTheme } from "@mui/material";
import { Box, Typography, useMediaQuery } from '@mui/material';
import { shades } from '../../theme'

const Footer = () => {
    const { palette: { neutral }} = useTheme();
    const isNonMobile = useMediaQuery("(min-width:760px)");
    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                sx= {{ display: isNonMobile ? "flex" : "wrap" }}
                justifyContent="space-between"
                flex-wrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box sx={{width: isNonMobile ? "clamp(20%, 30%, 40%)" : "none" }}>
                    <Typography 
                        variant="h4" 
                        fontWeight="bold" 
                        sx={{mb: isNonMobile ? "30px" : "11px" }}
                        color={shades.secondary[500]}
                    >
                        TrendyWears
                    </Typography>
                    <Typography sx={{mb: isNonMobile ? "0px" : "8px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eisumod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" sx={{mb: isNonMobile ? "30px" : "12px" }}>
                        About Us    
                    </Typography>
                    <Typography sx={{mb: isNonMobile ? "30px" : "8px" }}>Careers</Typography>
                    <Typography sx={{mb: isNonMobile ? "30px" : "8px" }}>Our stores</Typography>
                    <Typography sx={{mb: isNonMobile ? "30px" : "8px" }}>Terms & Conditions</Typography>
                    <Typography sx={{mb: isNonMobile ? "30px" : "8px" }}>Privacy Policy</Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" sx={{mb: isNonMobile ? "30px" : "12px" }}>
                       Customer Care    
                    </Typography>
                    <Typography sx={{mb: isNonMobile ? "30px" : "8px" }}>Help Center</Typography>
                    <Typography sx={{mb: isNonMobile ? "30px" : "8px" }}>Track Your Order</Typography>
                    <Typography sx={{mb: isNonMobile ? "30px" : "8px" }}>Corporate & Book Purchasing</Typography>
                    <Typography sx={{mb: isNonMobile ? "30px" : "8px" }}>Returns & Refunds</Typography>
                </Box>

                <Box width="clamp(20%, 25%, 30%)">
                    <Typography variant="h4" fontWeight="bold" sx={{mb: isNonMobile ? "30px" : "12px" }}>
                       Contact us    
                    </Typography>
                    <Typography sx={{mb: isNonMobile ? "30px" : "8px"}}>Lagos Island, Lagos</Typography>
                    <Typography sx={{mb: isNonMobile ? "30px" : "8px" }}>trendywears@gmail.com</Typography>
                    <Typography sx={{mb: isNonMobile ? "30px" : "8px" }}>+2349069301484, 09122427432</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;