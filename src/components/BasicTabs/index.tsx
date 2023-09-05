import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as GS from "@/styles/globalStyles";
import { TabPanelContent, TutorialImage } from "../TutorialModal/styles";
import {
  styledBox,
  styledBox1,
  styledTab,
  styledTabs,
  tabPanel,
} from "./styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  sx: any;
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
    <Box sx={styledBox1}>
      <Box sx={styledBox}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            ...styledTabs(),
            "& .MuiTabs-flexContainer": {
              justifyContent: "space-between",
            },
          }}
        >
          <Tab
            sx={{
              ...styledTab(),
              "&.Mui-selected": {
                background: "#FF3464",
              },
            }}
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              ...styledTab(),
              "&.Mui-selected": {
                background: "#FF3464",
              },
            }}
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              ...styledTab(),
              "&.Mui-selected": {
                background: "#FF3464",
              },
            }}
            {...a11yProps(2)}
          />
          <Tab
            sx={{
              ...styledTab(),
              "&.Mui-selected": {
                background: "#FF3464",
              },
            }}
            {...a11yProps(3)}
          />
          <Tab
            sx={{
              ...styledTab(),
              "&.Mui-selected": {
                background: "#FF3464",
              },
            }}
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <TabPanel sx={tabPanel} value={value} index={0}>
        <TabPanelContent>
          <GS.Title fontSize="1.4rem">Como Jogar?</GS.Title>
          <TutorialImage
            height="463px"
            bgImage={`url("/img/MobileTutorial/1- tutorialPokeballHightlight.png")`}
            bgImageLaptop={`url("/img/LaptopTutorial/1- tutorialPokeballHightlight.png")`}
          />
          <GS.Subtitle fontSize="1.4rem">
            Selecione qualquer Pokébola para começar
          </GS.Subtitle>
        </TabPanelContent>
      </TabPanel>
      <TabPanel sx={tabPanel} value={value} index={1}>
        <TabPanelContent>
          <GS.Title fontSize="1.4rem">Como Jogar?</GS.Title>
          <TutorialImage
            height="463px"
            bgImage={`url("/img/MobileTutorial/2- tutorialPokemonHidden.png")`}
            bgImageLaptop={`url("/img/LaptopTutorial/2- tutorialPokemonHidden.png")`}
          />
          <GS.Subtitle fontSize="1.4rem">
            Pense em qual acha que é o pokémon
          </GS.Subtitle>
        </TabPanelContent>
      </TabPanel>
      <TabPanel sx={tabPanel} value={value} index={2}>
        <TabPanelContent>
          <GS.Title fontSize="1.4rem">Como Jogar?</GS.Title>
          <TutorialImage
            height="463px"
            bgImage={`url("/img/MobileTutorial/3- tutorialRevealButtonHighlight.png")`}
            bgImageLaptop={`url("/img/LaptopTutorial/3- tutorialRevealButtonHighlight.png")`}
          />
          <GS.Subtitle fontSize="1.4rem">
            Clique no Botão "Revelar", apos pensar sobre qual é o pokemon
          </GS.Subtitle>
        </TabPanelContent>
      </TabPanel>
      <TabPanel sx={tabPanel} value={value} index={3}>
        <TabPanelContent>
          <GS.Title fontSize="1.4rem">Como Jogar?</GS.Title>
          <TutorialImage
            height="463px"
            bgImage={`url("/img/MobileTutorial/4- tutorialCloseButtonHighlight.png")`}
            bgImageLaptop={`url("/img/LaptopTutorial/4- tutorialCloseButtonHighlight.png")`}
          />
          <GS.Subtitle fontSize="1.4rem">
            Apos descobrir se acertou ou não, Clique no Botão "Fechar" para
            fechar esse pokémon e assim podendo repetir o processo quantas vezes
            quiser.
          </GS.Subtitle>
        </TabPanelContent>
      </TabPanel>
      <TabPanel sx={tabPanel} value={value} index={4}>
        <TabPanelContent>
          <GS.Title fontSize="1.4rem">Como Jogar?</GS.Title>
          <TutorialImage
            height="463px"
            bgImage={`url("/img/MobileTutorial/5- tutorialRandomButtonHighlight.png")`}
            bgImageLaptop={`url("/img/LaptopTutorial/5- tutorialRandomButtonHighlight.png")`}
          />
          <GS.Subtitle fontSize="1.4rem">
            Quando Advinhar todos os pokémon, clique em "Aleatorizar", para
            mudar os pokemons que tentar advinhar de novo. Agora que Você sabe
            jogar, aproveite e divirta-se.
          </GS.Subtitle>
        </TabPanelContent>
      </TabPanel>
    </Box>
  );
}
