"use client";

import { Grid, Card, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import LaptopWindowsRoundedIcon from "@mui/icons-material/LaptopWindowsRounded";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";

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
    link: "/blogs",
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

const Nav = () => {
  const path = usePathname();

  return (
    <Grid container id="nav">
      {ROUTES.map(
        (route) =>
          path != route.link && (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
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
                  <div style={{ marginTop: 2, marginBottom: 2 }}>
                    <Typography variant="body2">{route.label}</Typography>
                    <Typography variant="h5">{route.title}</Typography>
                  </div>
                  <div style={{ position: "relative", display: "flex" }}>
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        background:
                          `linear-gradient(90deg, rgba(16, 67, 98, 0.7), rgba(16, 67, 98, 0.2))`,
                      }}
                    ></div>
                    {route.icon}
                  </div>
                </Card>
              </Link>
            </Grid>
          )
      )}
    </Grid>
  );
};

export default Nav