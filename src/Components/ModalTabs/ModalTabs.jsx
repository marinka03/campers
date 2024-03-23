import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import FilterListCard from "../FilterListCard";
import Button from "../Button";
import Form from "../Form/Form";
// import { Button } from "@mui/material";
// import { theme } from "../../vars";
// import { createTheme } from '@mui/material/styles';
// import { deepOrange, red } from '@mui/material/colors';
// const theme = createTheme({
//     palette: {
//       primary: red,
//       secondary: deepOrange,
//     },
//   });

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

function CustomTabPanel(props) {
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ item }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
        >
          <Tab label="Features" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div style={{ display: "flex", gap: "24px", justifyContent: 'space-between' }}>
          <div className="content" style={{ width: "430px", height: "530px" }}>
            <FilterListCard details={item.details}></FilterListCard>
            <p>Vehicle details</p>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Form</div>
                <div>{item.form}</div>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Length</div>
                <div>{item.length}</div>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Width</div>
                <div>{item.width}</div>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Height</div>
                <div>{item.height}</div>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Tank</div>
                <div>{item.tank}</div>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Consumption</div>
                <div>{item.consumption}</div>
              </li>
            </ul>
          </div>
          <Form />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div style={{ display: "flex", gap: "24px", justifyContent: "space-between" }}>
          <div
            className="content"
            style={{ width: "430px", height: "530px" }}
          ></div>
          <Form />
        </div>
      </CustomTabPanel>
    </Box>
  );
}
