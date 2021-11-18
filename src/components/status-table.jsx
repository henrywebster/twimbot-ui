import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Collapse, Typography, withStyles } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";

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

function Info({ title, description }) {
    return (
        <Typography>
            <Box fontWeight={600}>{title}</Box>
            {description}
        </Typography>
    );
}

function SuccessDetails({ link, executionTime }) {
    return (
        <>
            <Box sx={{ margin: 1 }}>
                <Typography>
                    <Box fontWeight={600}>Link</Box>
                    <Typography
                        component="a"
                        variant="body1"
                        href={link}
                        target="_blank"
                    >
                        {link}
                    </Typography>
                </Typography>
            </Box>
            <Box sx={{ margin: 1 }}>
                <Info title="Execution Time" description={executionTime} />
            </Box>
        </>
    );
}

function ErrorDetails({ message, executionTime }) {
    return (
        <>
            <Box sx={{ margin: 1 }}>
                <Info title="Error Message" description={message} />
            </Box>
            <Box sx={{ margin: 1 }}>
                <Info title="Execution Time" description={executionTime} />
            </Box>
        </>
    );
}

function StatusDetails({ status, message, ...props }) {
    let details;
    if (status === "SUCCESS") {
        details = (
            <SuccessDetails
                link={props.link}
                executionTime={`${props.executionTime.toFixed(3)}s`}
            />
        );
    } else if (status === "FAILURE") {
        details = (
            <ErrorDetails
                message={message}
                executionTime={`${props.executionTime.toFixed(3)}s`}
            />
        );
    }
    return <Box sx={{ margin: 1 }}>{details}</Box>;
}

function StatusRow({ status }) {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <TableRow
                key={status.title}
                sx={{
                    "&:last-child td, &:last-child th": {
                        border: 0,
                    },
                }}
            >
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Chip
                        label={status.status}
                        color={
                            status.status === "SUCCESS" ? "success" : "error"
                        }
                    />
                </TableCell>
                <TableCell align="right">{status.title}</TableCell>
                <TableCell align="right">
                    {new Date(status.end_time * 1000).toUTCString()}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <StatusDetails {...status} />
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default function StatusTable({ statuses }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Status </TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {statuses.map((row) => {
                        return <StatusRow status={row} />;
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
