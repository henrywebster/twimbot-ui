import "./App.css";
import {
    Typography,
    Grid,
    Container,
    Box,
    Button,
    withStyles,
} from "@mui/material";
import StatusTable from "./components/status-table";
import Footer from "./components/footer";
import React, { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const styles = (theme) => ({
    root: {
        justifyContent: "space-between",
    },
    name: {
        textDecoration: "none",
    },
    items: {
        margin: 10,
    },
});

function createData(status, title, end_time, message, link, executionTime) {
    return { status, title, end_time, message, link, executionTime };
}

const rows = [
    createData(
        "SUCCESS",
        "Ooze",
        1636825419,
        null,
        "https://twitter.com/2x2Bot/status/1459566918852087809",
        0.123
    ),
    createData(
        "SUCCESS",
        "Peeking",
        1634389872,
        null,
        "https://twitter.com/2x2Bot/status/1457030202765291523",
        0.456
    ),
    createData(
        "FAILURE",
        "Sign",
        1636828420,
        "No paintings in the database",
        null,
        1.04
    ),
    createData(
        "SUCCESS",
        "Cool Guy",
        1636828429,
        null,
        "https://twitter.com/2x2Bot/status/1454493488259682308",
        0.567
    ),
    createData(
        "SUCCESS",
        "Cool Guy",
        1636828429,
        null,
        "https://twitter.com/2x2Bot/status/1454493488259682308",
        0.567
    ),
    createData(
        "SUCCESS",
        "Cool Guy",
        1636828429,
        null,
        "https://twitter.com/2x2Bot/status/1454493488259682308",
        0.567
    ),
];

const description = "Every minute, at 02:00 AM, on day 3 of the month";

function App() {
    const [status, setStatus] = useState({
        cron: {
            description: "Every Saturday at 17:00 UTC",
            next: "Saturday Nov 20 17:00 UTC",
        },
        executions: rows,
    });

    console.log(status);
    // fetch(`https://x53ycmmvx6.execute-api.us-east-2.amazonaws.com/dev/status`)
    //     .then((result) => result.json())
    //     .then((status) => setStatus(status));

    return (
        <Box sx={{ paddingTop: "80px" }}>
            <Container maxWidth="md">
                <Grid
                    container
                    spacing={3}
                    direction="column"
                    justifyContent="center"
                >
                    <Grid item xs={4}>
                        <Typography component="h1" variant="h4">
                            2x2 Bot Status
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            <Box fontWeight={600}>Current Schedule</Box>
                            {status.cron.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            <Box fontWeight={600}>Next Run</Box>
                            {status.cron.next}
                        </Typography>
                    </Grid>
                    <Grid item xx={4}>
                        <Button variant="contained">Refresh</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <StatusTable statuses={status.executions} />
                    </Grid>
                </Grid>
            </Container>
            <Footer copyright="2021 Henry J Webster" version="0.0.1" />
        </Box>
    );
}

export default App;
