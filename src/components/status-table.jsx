import React from "react";
import {
  Box,
  Chip,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Typography,
  TableHead,
  TableRow,
  Paper,
  Link,
} from "@mui/material/";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import IconButton from "@mui/material/IconButton";
import Summary from "./summary";

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
          <Link variant="body1" href={link} target="_blank">
            {link}
          </Link>
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
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Chip
            label={status.status}
            color={status.status === "SUCCESS" ? "success" : "error"}
            icon={
              status.status === "SUCCESS" ? (
                <SentimentVerySatisfiedIcon />
              ) : (
                <SentimentVeryDissatisfiedIcon />
              )
            }
          />
        </TableCell>
        <TableCell align="right">{status.title}</TableCell>
        <TableCell align="right">
          {new Date(status.end_time * 1000).toUTCString()}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
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
    <Summary title="Execution History">
      <TableContainer component={Paper} elevation={3}>
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
    </Summary>
  );
}
