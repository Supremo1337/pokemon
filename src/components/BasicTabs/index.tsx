import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Subtitle, Title } from "../Quiz/styles";
import { TutorialImage } from "../TutorialModal/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Title fontSize="1.4rem" letterSpacing="2px">
          Como Jogar?
        </Title>
        <TutorialImage bgImage={`url("/img/tutorialClickPokeball.png")`} />
        <Subtitle>Pense em qual pensa que é o pokémon</Subtitle>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Title fontSize="1.4rem" letterSpacing="2px">
          Como Jogar?
        </Title>
        <TutorialImage bgImage={`url("/img/tutorialPokemon.png")`} />
        <Subtitle>
          Clique no Botão "Revelar", apos pensar sobre qual é o pokemon
        </Subtitle>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Title fontSize="1.4rem" letterSpacing="2px">
          Como Jogar?
        </Title>
        <TutorialImage bgImage={`url("/img/tutorialRevealButton.png")`} />
        <Subtitle>Clique no Botão "Fechar" para fechar esse pokémon</Subtitle>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Title fontSize="1.4rem" letterSpacing="2px">
          Como Jogar?
        </Title>
        <TutorialImage bgImage={`url("/img/tutorialClickPokeball.png")`} />
        <Subtitle>Então Repita os passos e aproveite o jogo</Subtitle>
      </TabPanel>
    </Box>
  );
}
