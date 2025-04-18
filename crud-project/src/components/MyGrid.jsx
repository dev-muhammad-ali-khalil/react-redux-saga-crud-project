import React from 'react'
import { Box, Grid } from '@mui/material'
import MyForm from './MyForm'
import MyTable from './MyTable'

const MyGrid = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container columns={12} spacing={2}>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <MyForm />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 8 }}>
                        <MyTable />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default MyGrid