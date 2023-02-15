import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import { AppBar, IconGen, ListItemRow } from "./styles";
import { Title } from "../Quiz/styles";
import CheckBox, {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
} from "./CheckBox";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const gens = [
  {
    numberOfTheGeneration: "1",
    iconOfTheGeneration: "url(/icon/1-bulbasaurIcon.png)",
  },
  {
    numberOfTheGeneration: "2",
    iconOfTheGeneration: "url(/icon/2-chikoritaIcon.png)",
  },
  {
    numberOfTheGeneration: "3",
    iconOfTheGeneration: "url(/icon/3-treeckoIcon.png)",
  },
  {
    numberOfTheGeneration: "4",
    iconOfTheGeneration: "url(/icon/4-turtwigIcon.png)",
  },
  {
    numberOfTheGeneration: "5",
    iconOfTheGeneration: "url(/icon/5-snivyIcon.png)",
  },
  {
    numberOfTheGeneration: "6",
    iconOfTheGeneration: "url(/icon/6-chespinIcon.png)",
  },
  {
    numberOfTheGeneration: "7",
    iconOfTheGeneration: "url(/icon/7-rowletIcon.png)",
  },
  {
    numberOfTheGeneration: "8",
    iconOfTheGeneration: "url(/icon/8-grookeyIcon.png)",
  },
];

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <Title fontSize="2rem" letterSpacing="5px">
            Filtre as gerações
          </Title>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {gens.map((res) => {
            return (
              <ListItem disablePadding>
                <ListItemRow>
                  <IconGen bgImage={res.iconOfTheGeneration} />
                  <CheckBox />
                  <Title fontSize="1.6rem">{res.numberOfTheGeneration}</Title>
                </ListItemRow>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
