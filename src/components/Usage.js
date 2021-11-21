import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import {useSelector} from "react-redux";

export default function Usage() {
    const { queries } = useSelector((state) => state.data);

    return (
        <>
            <Title>Usage</Title>
            <Typography component="p" variant="h4">
                { queries.length } queries
            </Typography>
        </>
    );
}