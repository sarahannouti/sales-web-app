import { Link, Outlet, useLocation } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import { Footer, Button } from "./styles.js";

export default function MainTemplate() {
  const { pathname } = useLocation();
  const menu = [
    {
      id: 1,
      to: "/",
      label: "Home",
    },
    {
      id: 2,
      to: "/counters",
      label: "Counters",
    },
  ];

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: "flex",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Sales
            </Typography>

            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {menu.map(({ to, label }) => (
                <Button
                  key={label}
                  component={Link}
                  to={to}
                  current={pathname === to}
                >
                  {label}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton component={Link} sx={{ p: 0 }}>
                <Avatar alt="Sara" src="/" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Outlet />
      </main>
      <Footer>
        <Typography variant="overline">SHA : 2023</Typography>
      </Footer>
    </>
  );
}
