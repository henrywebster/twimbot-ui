import "./App.css";
import {
    Typography,
    Grid,
    Container,
    Box,
    Paper,
    ThemeProvider,
} from "@mui/material";
import StatusTable from "./components/status-table";
import Layout from "./components/layout";
import React, { useState, useEffect } from "react";
import Summary from "./components/summary";
import theme from "./components/theme";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function createData(status, endTime, executionTime) {
    return { status, endTime, executionTime };
}

const rows = [
    createData("SUCCESS", 1636825419, 25),
    createData("SUCCESS", 1634389872, 30),
    createData("FAILURE", 1636828420, 24),
    createData("SUCCESS", 1636828429, 10),
    createData("SUCCESS", 1636828429, 123),
    createData("SUCCESS", 1636828429, 100),
];

function CronDetail({ cron }) {
    return (
        <Summary title="Cron Details">
            <Paper elevation={3}>
                <Grid container columnSpacing={4} padding={2}>
                    <Grid item component={Typography}>
                        <Box fontWeight={600}>Current Schedule</Box>
                        {cron.description}
                    </Grid>
                    <Grid item component={Typography}>
                        <Box fontWeight={600}>Next Run</Box>
                        {new Date(cron.next * 1000).toUTCString()}
                    </Grid>
                </Grid>
            </Paper>
        </Summary>
    );
}

function App() {
    const [cron, setCron] = useState({
        description: "Loading...",
        next: "Loading...",
    });

    const [executions, setExections] = useState(rows);

    useEffect(() => {
        fetch("https://gw7g3q8a7e.execute-api.us-east-2.amazonaws.com/dev/cron")
            .then((response) => response.json())
            .then((data) => setCron(data));
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ paddingTop: "40px" }}>
                <Container maxWidth="md">
                    <Layout title="2x2 Bot Status">
                        <CronDetail cron={cron} />
                        <StatusTable executions={executions} />
                    </Layout>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
