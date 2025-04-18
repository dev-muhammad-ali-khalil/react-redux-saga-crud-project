import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'

const rows = [
    {
        name: "Frozen yoghurt",
        calories: "159",
        fat: "6.0",
        carbs: "24",
        protein: "4.0"
    },
    {
        name: "Ice cream sandwich",
        calories: "237",
        fat: "9.0",
        carbs: "37",
        protein: "4.3"
    },
    {
        name: "Eclair",
        calories: "262",
        fat: "16.0",
        carbs: "24",
        protein: "6.0"
    },
    {
        name: "Cupcake",
        calories: "305",
        fat: "3.7",
        carbs: "67",
        protein: "4.3"
    },
    {
        name: "Gingerbread",
        calories: "356",
        fat: "16.0",
        carbs: "49",
        protein: "3.9"
    }
]

const MyTable = () => {

    return (
        <div>
            <h2>Student Table</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} area-label="simple-table">
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
                        {
                            rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MyTable