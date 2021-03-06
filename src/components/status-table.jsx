import React from "react";
import {
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material/";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Summary from "./summary";

function StatusRow({ execution }) {
    return (
        <>
            <TableRow
                // key={exeuction.executionTime}
                sx={{
                    "&:last-child td, &:last-child th": {
                        border: 0,
                    },
                }}
            >
                <TableCell component="th" scope="row">
                    <Chip
                        label={execution.status}
                        color={
                            execution.status === "SUCCEEDED"
                                ? "success"
                                : "error"
                        }
                        icon={
                            execution.status === "SUCCEEDED" ? (
                                <SentimentVerySatisfiedIcon />
                            ) : (
                                <SentimentVeryDissatisfiedIcon />
                            )
                        }
                    />
                </TableCell>
                <TableCell align="right">
                    {new Date(execution.endTime).toUTCString()}
                </TableCell>
                <TableCell align="right">
                    {execution.executionTime / 1000}
                </TableCell>
            </TableRow>
        </>
    );
}

export default function StatusTable({ executions }) {
    return (
        <Summary title="Execution History">
            <TableContainer component={Paper} elevation={3}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Status </TableCell>
                            <TableCell align="right">Time Complete</TableCell>
                            <TableCell align="right">
                                Execution Length (s)
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {executions.map((row) => {
                            return <StatusRow execution={row} />;
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Summary>
    );
}
