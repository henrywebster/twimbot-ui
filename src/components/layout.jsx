import { Grid, Typography, Link } from "@mui/material";
import logo from "../logo.webp";

const Nav = () => (
  <Grid container spacing={2}>
    <Grid item>
      <Link variant="subtitle2" href="https://hwebs.info" target="_blank">
        ⌨️ By Henry
      </Link>
    </Grid>
    <Grid item>
      <Link
        variant="subtitle2"
        href="https://twitter.com/2x2Bot"
        target="_blank"
      >
        🐦 @2x2Bot
      </Link>
    </Grid>
  </Grid>
);

const LayoutHeading = ({ title }) => (
  <>
    <Grid container spacing={2}>
      <Grid item>
        <img src={logo} width={40} />
      </Grid>
      <Grid item>
        <Typography component="h1" variant="h4">
          {title}
        </Typography>
      </Grid>
    </Grid>
    <Grid item>
      <Nav />
    </Grid>
  </>
);

function LayoutFooter({ version, copyright }) {
  return (
    <Grid
      container
      padding={2}
      spacing={2}
      alignItems="center"
      justifyContent="center"
      component="footer"
    >
      <Grid item>
        <Typography variant="subtitle2" component="span">
          {`©${copyright}`}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" component="span">
          {`v${version}`}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          component="a"
          variant="subtitle2"
          href="https://github.com/henrywebster/hwebs-info"
          target="_blank"
        >
          🖥️ Source on GitHub
          {/* <Emoji emoji="🖥" /> Source on GitHub */}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          component="a"
          variant="subtitle2"
          href="https://github.com/henrywebster/hwebs-info/issues"
          target="_blank"
        >
          ⚠️ Report an Issue
          {/* <Emoji emoji="⚠️" /> Report an Issue */}
        </Typography>
      </Grid>
    </Grid>
  );
}

const Layout = ({ children, title }) => (
  <>
    <Grid container spacing={3} direction="column" justifyContent="center">
      <Grid item xs={12}>
        <LayoutHeading title={title} />
      </Grid>
      {children.map((child) => (
        <Grid item xs={12}>
          {child}
        </Grid>
      ))}
    </Grid>
    <LayoutFooter copyright="2021 Henry J Webster" version="0.0.1" />
  </>
);

export default Layout;
