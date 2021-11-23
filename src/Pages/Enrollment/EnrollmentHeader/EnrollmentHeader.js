import { Grid } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';

const EnrollmentHeader = ({ date, setDate }) => {
    return (
        <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
                <Calender date={date} setDate={setDate}></Calender>
            </Grid>
            <Grid item xs={8}>
                <img style={{ width: "100%" }} src="https://www.stonefryingpans.com/wp-content/uploads/2021/04/Learn-To-Cook-Beginners-Cooking-Guide.jpg" alt="" />
            </Grid>
        </Grid>
    );
};

export default EnrollmentHeader;