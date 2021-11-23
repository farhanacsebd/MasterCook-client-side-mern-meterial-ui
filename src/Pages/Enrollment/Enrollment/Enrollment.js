import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableEnrollment from '../AvailableEnrollment/AvailableEnrollment';
import EnrollmentHeader from '../EnrollmentHeader/EnrollmentHeader';

const Enrollment = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navigation></Navigation>
            <EnrollmentHeader date={date} setDate={setDate}></EnrollmentHeader>
            <AvailableEnrollment date={date}></AvailableEnrollment>
        </div>
    );
};

export default Enrollment;