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
import React, { useState } from "react";
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

function CronDetail({ status }) {
    return (
        <Summary title="Cron Details">
            <Paper elevation={3}>
                <Grid container columnSpacing={4} padding={2}>
                    <Grid item component={Typography}>
                        <Box fontWeight={600}>Current Schedule</Box>
                        {status.cron.description}
                    </Grid>
                    <Grid item component={Typography}>
                        <Box fontWeight={600}>Next Run</Box>
                        {status.cron.next}
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
            <Box sx={{ paddingTop: "40px" }}>
                <Container maxWidth="md">
                    <Layout title="2x2 Bot Status">
                        <CronDetail status={status} />
                        <StatusTable executions={status.executions} />
                    </Layout>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
