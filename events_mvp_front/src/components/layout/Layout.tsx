import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Grid
        templateAreas={`
                  "nav"
                  "main"`}
        gridTemplateRows={"50px 1fr"}
        h="200px"
        gap="1"
      >
        <GridItem area={"nav"}>navbar</GridItem>
        <GridItem p="20px" area={"main"}>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
