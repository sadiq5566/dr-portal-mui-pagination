import { Grid } from "@mui/material";
import { ReactNode } from "react";
import SideBarIcon from "../OrdersStatus/SiderBar";
type IProps = {
  children: ReactNode;
  sideContent: ReactNode;
};
const Layout = ({ children, sideContent }: IProps) => {
  return (
    <Grid container>
      <Grid item xs={3} sx={{ display: "flex" }}>
        <SideBarIcon />
        {sideContent}
      </Grid>
      <Grid item xs={9}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Layout;
