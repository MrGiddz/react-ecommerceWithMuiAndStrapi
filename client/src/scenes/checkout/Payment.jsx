import {Box, Typography, TextField } from '@mui/material';


const Payment = ({values, touched, errors, handleBlur, handleChange}) => {


  return (
    <Box m="30px 0">

        {/* CONTACT INFO */}
        <Box>
            <Typography sx={{ mb: "15px"}}>
                Contact Info
            </Typography>
            <TextField 
                fullWidth
                type="text"
                label="Email"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4", mb: "15px" }}
            />
            <TextField 
                fullWidth
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                value={values.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
                error={!!touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
                sx={{ gridColumn: "span 4", mb: "15px" }}
            />
        </Box>
    </Box>
  )
}

export default Payment