import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import { providerConfig } from "./Config/Auth0 Authentication/Auth0Provider";
import { Auth0Provider } from "@auth0/auth0-react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true
    }
  }
});
interface Props {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}
const Wrapper = ({ children }: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Auth0Provider {...providerConfig}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </Auth0Provider>
      </ThemeProvider>
    </>
  );
};
export default Wrapper;
