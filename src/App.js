import "./App.css";
import { Typography, Grid, Container, Box, Paper, ThemeProvider } from "@mui/material";
import StatusTable from "./components/status-table";
import Layout from "./components/layout";
import React, { useState } from "react";
import Summary from "./components/summary";
import theme from "./components/theme";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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

function CronDetail({ status }) {
    return (
        <Summary title="Cron Details">
            <Paper>
                <Grid container columnSpacing={4} padding={2}>
                    <Grid item>
                        <Typography>
                            <Box fontWeight={600}>Current Schedule</Box>
                            {status.cron.description}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            <Box fontWeight={600}>Next Run</Box>
                            {status.cron.next}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Summary>
    );
}

function App() {
    const [status, setStatus] = useState({
        cron: {
            description: "Every Saturday at 17:00 UTC",
            next: "Saturday Nov 20 17:00 UTC",
        },
        executions: rows,
    });

    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ paddingTop: "80px" }}>
            <Container maxWidth="md">
                <Layout title="2x2 Bot Status">
                    <CronDetail status={status} />
                    <StatusTable statuses={status.executions} />
                </Layout>
            </Container>
        </Box>
        </ThemeProvider>
    );
}

export default App;
