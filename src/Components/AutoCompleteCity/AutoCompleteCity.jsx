import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { selectorAllItems } from "../../redux/selectors";
import { useSelector } from "react-redux";

export default function AutoCompleteCity() {
  const allItems = useSelector(selectorAllItems);
  const uniqArr = [...new Set(allItems.map((item) => item.location))];
  const resCities = uniqArr.map((item) => ({ label: item }));
  console.log(resCities);
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={resCities}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Cities" />}
    />
  );
}
