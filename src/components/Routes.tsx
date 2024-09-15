"use client";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import LaptopWindowsRoundedIcon from "@mui/icons-material/LaptopWindowsRounded";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import { usePathname } from "next/navigation";
import { Grid, Card, Box, Typography } from "@mui/material";
import Link from "next/link";

const ROUTES = [
  {
    title: "Home",
    label: "Go back to",
    icon: <HomeRoundedIcon fontSize="large" />,
    link: "/",
  },
  {
    title: "About me",
    label: "Learn more",
    icon: <InfoOutlinedIcon fontSize="large" />,
    link: "/about",
  },
  {
    title: "Blogs",
    label: "Read some",
    icon: <ImportContactsRoundedIcon fontSize="large" />,
    link: "/blog",
  },
  {
    title: "Schools",
    label: "I went to awesome",
    icon: <SchoolRoundedIcon fontSize="large" />,
    link: "/schools",
  },
  {
    title: "Experience",
    label: "Gained worthy",
    icon: <LaptopWindowsRoundedIcon fontSize="large" />,
    link: "/experience",
  },
  {
    title: "Skills",
    label: "Learned challenging",
    icon: <CodeRoundedIcon fontSize="large" />,
    link: "/skills",
  },
  {
    title: "Projects",
    label: "Some wonderful",
    icon: <DevicesRoundedIcon fontSize="large" />,
    link: "/projects",
  },
  {
    title: "Connect",
    label: "To say Hi,",
    icon: <AlternateEmailRoundedIcon fontSize="large" />,
    link: "/connect",
  },
];

const Routes = () => {
  const path = usePathname();
  return (
    <Grid container id="nav" sx={{ justifyContent: "center" }}>
      {ROUTES.map(
        (route) =>
          path != route.link && (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              sx={{ p: 1 }}
              key={route.title + "-route"}
            >
              <Link
                href={route.link}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 3,
                    height: "100%",
                  }}
                >
                  <Box sx={{ my: 2 }}>
                    <Typography variant="body2">{route.label}</Typography>
                    <Typography variant="h5">{route.title}</Typography>
                  </Box>
                  <Box sx={{ position: "relative", display: "flex" }}>
                    <Box
                      sx={{
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        background: `linear-gradient(90deg, rgba(30, 30, 30, 0.9), rgba(30, 30, 30, 0.2))`,
                      }}
                    ></Box>
                    {route.icon}
                  </Box>
                </Card>
              </Link>
            </Grid>
          )
      )}
    </Grid>
  );
};

export default Routes;