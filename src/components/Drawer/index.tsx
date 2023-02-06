import * as React from "react";
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
import { Text } from "../Quiz/styles";

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
  { numberOfTheGem: "1", iconOfTheGem: "url(/icon/1-bulbasaurIcon.png)" },
  { numberOfTheGem: "2", iconOfTheGem: "url(/icon/2-chikoritaIcon.png)" },
  { numberOfTheGem: "3", iconOfTheGem: "url(/icon/3-treeckoIcon.png)" },
  { numberOfTheGem: "4", iconOfTheGem: "url(/icon/4-turtwigIcon.png)" },
  { numberOfTheGem: "5", iconOfTheGem: "url(/icon/5-snivyIcon.png)" },
  { numberOfTheGem: "6", iconOfTheGem: "url(/icon/6-chespinIcon.png)" },
  { numberOfTheGem: "7", iconOfTheGem: "url(/icon/7-rowletIcon.png)" },
  { numberOfTheGem: "8", iconOfTheGem: "url(/icon/8-grookeyIcon.png)" },
];

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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

          <Text fontSize="2rem" letterSpacing="5px">
            Filtre as gerações
          </Text>
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
                  <IconGen bgImage={res.iconOfTheGem} />
                  <Text fontSize="1.6rem">{res.numberOfTheGem}</Text>
                </ListItemRow>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}