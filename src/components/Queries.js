import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import {useSelector} from "react-redux";

export default function Queries() {

    const { queries } = useSelector((state) => state.data);

    return (
        <React.Fragment>
            <Title>Recent queries</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>URL</TableCell>
                        <TableCell>Followers</TableCell>
                        <TableCell>Following</TableCell>
                        <TableCell>Posts</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {queries.map((row) => (
                        <TableRow key={row.url}>
                            <TableCell>{row.url}</TableCell>
                            <TableCell>{row.followers}</TableCell>
                            <TableCell>{row.following}</TableCell>
                            <TableCell>{row.posts}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}