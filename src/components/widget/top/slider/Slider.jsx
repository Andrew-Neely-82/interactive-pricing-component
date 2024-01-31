import { Switch, styled } from "@mui/material";

const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(({ theme }) => ({
  width: "50px",
  height: "25px",
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 4,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(25px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        width: "50px",
        height: "25px",
        backgroundColor: theme.palette.mode === "dark" ? "#10D5C2" : "#10D5C2",
        opacity: 1,
        border: 0,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    width: "16px",
    height: "16px",
  },
  "& .MuiSwitch-track": {
    width: "50px",
    height: "25px",
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#D1D9EF" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default IOSSwitch;
