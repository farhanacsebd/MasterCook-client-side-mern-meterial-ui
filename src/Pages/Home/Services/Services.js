import { Grid } from '@mui/material';
import React from 'react';

const Services = () => {
    return (
        <div>
            <h2>this is services</h2>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    1
                </Grid>
                <Grid item xs={8}>
                    3
                </Grid>
            </Grid>
        </div>
    );
};

export default Services;