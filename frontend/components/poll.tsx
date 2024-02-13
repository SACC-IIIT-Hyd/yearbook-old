import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Autocomplete, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const options = [{ label: 'Option 1', id: 1 }, { label: 'Option 2', id: 2 }];

export default function Poll({ value = "", disabled = false }) {
    return (
        <Paper elevation={3} style={{ width: "fit-content" }}   >
            <div style={{ width: "fit-content" }} >
                <Card variant="outlined" sx={{ width: "fit-content" }}  >
                    <CardContent >
                        <Typography variant="h5" component="div" fontFamily={"sans-serif"}>
                            Foodie of the batch
                        </Typography>
                        <Typography variant="body1" component="div">
                            Most eater eater eater
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Autocomplete
                            disabledItemsFocusable={true}
                            disabled={disabled}
                            id="poll-name-picker"
                            options={options}
                            renderInput={(params) => <TextField {...params} label="Select one" />}
                            sx={{ width: 300 }}
                            value={options.find((option) => option.label === value) || null}
                        />
                    </CardActions>
                </Card >
            </div>
        </Paper>
    );
}

