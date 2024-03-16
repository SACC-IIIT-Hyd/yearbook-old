import { Box, Divider, Typography, styled } from "@mui/material";
import Poll from "../../components/poll";

export default function Polls() {
    return (
        <center>
            <div style={{ width: "fit-content", display: "flex", padding: "10px" }}>
                <div style={{ width: "60%" }}>
                    <Typography variant="h4" component="h1" align="center" m={2} >
                        Vote for the best person
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Poll />
                    </Box>
                </div>

                <Divider style={{ marginRight: "20px", marginLeft: "20px" }} orientation="vertical" flexItem />
                <div style={{ width: "40%", height: "fit-parent" }}>
                    <Typography variant="h5" fontFamily={"ProtestRiot"} component="h1" align="center" m={2} >
                        Your votes
                    </Typography>
                    <Poll value="Option 1" disabled />
                </div>
            </div></center>
    );
}

