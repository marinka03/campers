import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import FilterListCard from "../FilterListCard";
// import Button from "../Button";
import Form from "../Form/Form";
import {
  TabWrapper,
  TabContentWrap,
  DetailsTitle,
  DetailsList,
  DetailsItem,
} from "./ModalTabs.styled";
import RatingStars from "../Stars/Stars";
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
  // Отримуємо посилання на елемент з тегом <p>
  // const paragraphElement = document.getElementsByClassName('css-ahj2mt-MuiTypography-root');

  // // Створюємо новий елемент з тегом <div>
  // const divElement = document.createElement('div');

  // // Копіюємо вміст елемента <p> до елемента <div>
  // divElement.innerHTML = paragraphElement.innerHTML;

  // // Замінюємо елемент <p> на новий елемент <div>
  // paragraphElement.parentNode.replaceChild(divElement, paragraphElement);
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
  console.log(item.reviews);

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
      <CustomTabPanel value={value} index={0} component={"span"}>
        <TabWrapper>
          <TabContentWrap>
            <FilterListCard details={item.details}></FilterListCard>
            <DetailsTitle>Vehicle details</DetailsTitle>
            <DetailsList>
              <DetailsItem>
                <p>Form</p>
                <p>{item.form}</p>
              </DetailsItem>
              <DetailsItem>
                <p>Length</p>
                <p>{item.length}</p>
              </DetailsItem>
              <DetailsItem>
                <p>Width</p>
                <p>{item.width}</p>
              </DetailsItem>
              <DetailsItem>
                <p>Height</p>
                <p>{item.height}</p>
              </DetailsItem>
              <DetailsItem>
                <p>Tank</p>
                <p>{item.tank}</p>
              </DetailsItem>
              <DetailsItem>
                <p>Consumption</p>
                <p>{item.consumption}</p>
              </DetailsItem>
            </DetailsList>
          </TabContentWrap>

          <Form />
        </TabWrapper>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1} component={"span"}>
        <TabWrapper>
          <div className="content" style={{ width: "430px", height: "530px" }}>
            <ul style={{display:"flex", flexDirection: 'column', gap: '24px'}}>
              {item.reviews.map((user) => (
                <li>
                  <div>
                    <div>avatar</div>
                    <div>
                      <p>{user.reviewer_name}</p>
                      <RatingStars count={5} rating={user.reviewer_rating} spacing={4} classNames='tab-rating-stars' />
                    </div>
                  </div>
                  <p>{user.comment}</p>
                </li>
              ))}
            </ul>
          </div>
          <Form />
        </TabWrapper>
      </CustomTabPanel>
    </Box>
  );
}
