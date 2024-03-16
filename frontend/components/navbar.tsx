import Box from '@mui/material/Box';

export default function Navbar() {
    return (
        <Box sx={{ position: 'sticky', top: 0, zIndex: 10, background: "#0C0018" }}>
            <div>
                <h1>Navbar</h1>
                <p>Get started by editing <code>frontend/components/navbar.tsx</code></p>
            </div>
        </Box>
    );
}