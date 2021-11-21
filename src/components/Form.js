import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Title from "./Title";
import {useDispatch, useSelector} from "react-redux";
import {addQuery} from "../redux/actions/data";
import {CircularProgress} from "@mui/material";

export default function SignUp() {

    const { loading } = useSelector((state) => state.data);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        dispatch(addQuery(data.get('url')));
    };

    return (
        loading ?
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
        :
        <>
            <Title>Instagram statistics</Title>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="url"
                            label="URL"
                            name="url"
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Submit
                </Button>
            </Box>
        </>
    );
}