import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <Grid
        templateAreas={`
                  "nav"
                  "main"`}
        gridTemplateRows={"50px 1fr"}
        h="1000px"
        gap="1"
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <GridItem p="20px" area={"main"} bg={"gray.100"}>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
