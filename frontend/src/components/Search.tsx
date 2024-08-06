'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push(`/results/${search}`)
        setSearch('')
    }

    return (
        <Box component="form" onSubmit={handleSubmit} display="flex" justifyContent="center">
            <TextField 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder='Search' 
                variant="outlined"
            />
            <Button type="submit" variant="contained">Search</Button>
        </Box>
    )
}