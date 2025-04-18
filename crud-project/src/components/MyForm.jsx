import React, { useState } from 'react'
import { Container, TextField, Button } from '@mui/material'

const MyForm = () => {
    const [student, setStudent] = useState({
        id: '',
        name: '',
        email: '',
        password: ''
    })

    const inputHandler = (event) => {
        setStudent({ ...student, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <h2>Student Form</h2>
            <Container sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <TextField type='text' label='ID' name='id' value={student.id} onChange={inputHandler} fullWidth autoFocus></TextField>
                <TextField type='text' label='Name' name='name' value={student.name} onChange={inputHandler} fullWidth></TextField>
                <TextField type='email' label='Email' name='email' value={student.email} onChange={inputHandler} fullWidth></TextField>
                <TextField type='password' label='Password' name='password' value={student.password} onChange={inputHandler} fullWidth></TextField>
                <Button variant='contained' fullWidth>Submit Now</Button>
            </Container>
        </div>
    )
}

export default MyForm