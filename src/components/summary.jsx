import { Grid, Typography, Button } from "@mui/material";

const SummaryHeading = ({ id, children, ...props }) => (
    <Grid container spacing={2} paddingY={2} justifyContent="space-between">
        <Grid item>
            <Typography component="h2" variant="h5">
                {props.title}
            </Typography>
        </Grid>
        <Grid item>
            <Button variant="contained">Refresh</Button>
        </Grid>
    </Grid>
);

export default function Summary({ id, children, ...props }) {
    return (
        <>
            <SummaryHeading title={props.title} />
            {children}
        </>
    );
}
