import { Box, Button as Buttons } from "@mui/material";
import React from "react";
import Button from "../Button/index";
import theme from "../../theme";

const DataStatus = () => {
  return (
    <Box sx={{ display: "flex", marginRight: "100px" }}>
      <Box>
        <Button size="medium" variant="contained" text="	Accept" color="AccLock">
          Accept
        </Button>
      </Box>
      <Buttons
        sx={{
          minWidth: "39px",
          border: 1,
          borderColor: "grey.300",
          borderRadius: "5px",
          backgroundColor: theme.palette.success.light,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginTop: "1px",
          marginLeft: "8px"
        }}
      >
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2802 7.33582L6.66926 12.9467C5.56087 14.0551 3.76305 14.2301 2.5539 13.2331C1.16974 12.0929 1.09549 10.0352 2.33646 8.79423L8.89134 2.23935C9.58608 1.54462 10.7157 1.41203 11.4741 2.03252C12.3491 2.74847 12.3968 4.03717 11.6172 4.81675L6.04877 10.3852C5.75709 10.6769 5.2798 10.6769 4.98811 10.3852C4.69643 10.0935 4.69643 9.61624 4.98811 9.32456L9.6285 4.68417C9.84594 4.46674 9.84594 4.10611 9.6285 3.88868C9.41107 3.67124 9.05044 3.67124 8.83301 3.88868L4.26687 8.45482C3.57213 9.14955 3.43955 10.2792 4.06004 11.0375C4.77598 11.9126 6.06468 11.9603 6.84427 11.1807L12.3226 5.70241C13.431 4.59402 13.606 2.7962 12.609 1.58704C11.4634 0.197579 9.41107 0.128635 8.1701 1.36961L1.66295 7.87676C0.140898 9.39881 -0.108357 11.8754 1.2652 13.5354C2.85088 15.4393 5.66694 15.54 7.3746 13.8324L13.0756 8.13132C13.2931 7.91388 13.2931 7.55326 13.0756 7.33582C12.8582 7.11839 12.4976 7.11839 12.2802 7.33582Z"
            fill="#4362EA"
          />
        </svg>
      </Buttons>
    </Box>
  );
};

export default DataStatus;
