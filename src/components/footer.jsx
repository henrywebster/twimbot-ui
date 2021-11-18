import { Box, Typography } from "@mui/material";

export default function Footer({ version, copyright }) {
    return (
        <Box padding={2} textAlign="center" component="footer">
            <Typography variant="subtitle2" component="span">
                {`©${copyright}`}
            </Typography>
            |
            <Typography variant="subtitle2" component="span">
                {`v${version}`}
            </Typography>
            |
            <Typography
                component="a"
                variant="subtitle2"
                href="https://github.com/henrywebster/hwebs-info"
                target="_blank"
            >
                Source on GitHub
                {/* <Emoji emoji="🖥" /> Source on GitHub */}
            </Typography>
            |
            <Typography
                component="a"
                variant="subtitle2"
                href="https://github.com/henrywebster/hwebs-info/issues"
                target="_blank"
            >
                Report an Issue
                {/* <Emoji emoji="⚠️" /> Report an Issue */}
            </Typography>
        </Box>
    );
}
