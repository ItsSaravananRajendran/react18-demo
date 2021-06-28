import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import randomWords from "random-words";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createData(name, key, calories, fat, carbs, protein) {
    return { name, calories, key, fat, carbs, protein };
}

const rows = [];

for (let I = 0; I < 500; I++) {
    rows.push(createData(randomWords(), I, getRndInteger(0, 200), getRndInteger(0, 200), getRndInteger(0, 200), getRndInteger(0, 200)))
}


export default function BasicTable({ filterVal }) {
    const classes = useStyles();
    const filterData = rows.filter(row => row.name.indexOf(filterVal) !== -1);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filterData.map((row) => (
                        <TableRow key={row.key}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
