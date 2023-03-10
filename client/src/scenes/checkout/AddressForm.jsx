import { useMediaQuery,TextField, Box } from "@mui/material";
import { getIn } from "formik";
import { useEffect } from "react";

const AddressForm = ({
    type,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
}) => {
    const isNonMobile = useMediaQuery("(min-width:600px)");


    // these functions allow for better code readability
    const formattedName = (field) => `${type}.${field}`;

    const formattedError = (field) => Boolean(
        getIn(touched, formattedName(field)) && 
        getIn(errors, formattedName(field))
    )

    const formattedHelper = (field) => 
        getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))


  return (
    <Box 
        display="grid"
        gap="15px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4"}
        }}
    >
        <TextField 
            fullWidth
            type="text"
            label="First Name"
            onBlur={handleBlur}
            value={values.firstName}
            onChange={handleChange}
            name={formattedName("firstName")}
            error={formattedError("firstName")}
            helperText={formattedHelper("firstName")}
            sx={{ gridColumn: "span 2"}}
        />
        <TextField 
            fullWidth
            type="text"
            label="Last Name"
            onBlur={handleBlur}
            value={values.lastName}
            onChange={handleChange}
            name={formattedName("lastName")}
            error={formattedError("lastName")}
            helperText={formattedHelper("lastName")}
            sx={{ gridColumn: "span 2"}}
        />
        <TextField 
            fullWidth
            type="text"
            label="Country"
            onBlur={handleBlur}
            value={values.country}
            onChange={handleChange}
            name={formattedName("country")}
            error={formattedError("country")}
            helperText={formattedHelper("country")}
            sx={{ gridColumn: "span 4"}}
        />
        <TextField 
            fullWidth
            type="text"
            label="Street Address"
            onBlur={handleBlur}
            value={values.street1}
            onChange={handleChange}
            name={formattedName("street1")}
            error={formattedError("street1")}
            helperText={formattedHelper("street1")}
            sx={{ gridColumn: "span 2"}}
        />
        <TextField 
            fullWidth
            type="text"
            label="Street Address 2 (optional)"
            onBlur={handleBlur}
            value={values.street2}
            onChange={handleChange}
            name={formattedName("street2")}
            error={formattedError("street2")}
            helperText={formattedHelper("street2")}
            sx={{ gridColumn: "span 2"}}
        />
        <TextField 
            fullWidth
            type="text"
            label="City"
            onBlur={handleBlur}
            value={values.city}
            onChange={handleChange}
            name={formattedName("city")}
            error={formattedError("city")}
            helperText={formattedHelper("city")}
            sx={{ gridColumn: "span 2"}}
        />
        <TextField 
            fullWidth
            type="text"
            label="State"
            onBlur={handleBlur}
            value={values.state}
            onChange={handleChange}
            name={formattedName("state")}
            error={formattedError("state")}
            helperText={formattedHelper("state")}
            sx={{ gridColumn: "1fr"}}
        />
        <TextField 
            fullWidth
            type="text"
            label="Zip Code"
            onBlur={handleBlur}
            value={values.zipCode}
            onChange={handleChange}
            name={formattedName("zipCode")}
            error={formattedError("zipCode")}
            helperText={formattedHelper("zipCode")}
            sx={{ gridColumn: "1fr"}}
        />
    </Box>
  )
}

export default AddressForm;