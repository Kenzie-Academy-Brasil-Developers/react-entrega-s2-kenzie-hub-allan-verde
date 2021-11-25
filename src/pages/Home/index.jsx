import { useHistory, Redirect } from "react-router-dom";
import { Container, CssBaseline, Box, Typography, Button } from "@mui/material";

function Home({ authenticated }) {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/dasboard" />;
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 6,
          }}
        >
          <Typography component="h1" variant="h4">
            Kenzie<span>Hub</span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => handleNavigation("/signup")}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastre-se
            </Button>

            <Button
              onClick={() => handleNavigation("/login")}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Home;
